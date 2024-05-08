import React from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView, FlatList, Dimensions } from 'react-native';

import usePolyglot from '../../../hooks/usePolyglot';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { fetchData } from '../../../services/FetchClient';

import Header from '../../../components/Header';
import CategoryItem from './components/CategoryItem';
import ProductItem from './components/ProductItem';
import Loading from '../../../components/Loading';
import CartModal from './components/CartModal';

import { appColors } from '../../../helper/colors';
import { screens } from '../../../helper/strings';

import { globalStyles } from '../../../helper/globalStyles';
import { appendSearchCiteria, generateSearchCiteria } from '../../../helper/functions';

import { ITEM_WIDTH } from './components/CategoryItem'

const OrderMainScreen = () => {
    // token redux state::
    const tokenReduxState = useSelector((state) => state.auth);
    const { token } = tokenReduxState;

    const { width } = Dimensions.get('screen');

    const navigation = useNavigation();
    const __ = usePolyglot();

    // state for categories & products of cateogry
    const [allCategories, setAllCategories] = React.useState([]);
    const [currentCategory, setCurrentCategory] = React.useState(null);
    const [selectedIndex, setSelectedIndex] = React.useState(0);
    const [categoryProducts, setCategoryProducts] = React.useState([]);
    /** callback for setting products */
    const updateProducts = React.useCallback((items, page) => {
        if (page > 1) {
            setCategoryProducts((prevProducts) => [
                ...prevProducts,
                ...items,
            ]);
        } else {
            setCategoryProducts(items);
        }
    }, [setCategoryProducts]);

    // state for loading products
    const [loadingProducts, setLoadingProducts] = React.useState(false);

    // state for pagination
    const [page, setPage] = React.useState(1);
    const [loadingPagination, setLoadingPagination] = React.useState(false);
    const [totalPages, setTotalPages] = React.useState(0);

    // states for cart 
    const [isCartModalVisible, setIsCartModalVisible] = React.useState(false);
    const [selectedCartItem, setSelectedCartItem] = React.useState(null);

    // ref to scrollview
    const scrollViewRef = React.useRef(null);

    /** function for handling scroll view on categoris */
    function _handleScrollViewPress(index) {
        try {
            if (scrollViewRef) {
                const offsetX = Math.max(0, (index * ITEM_WIDTH) - (width / 2) + (ITEM_WIDTH / 2));
                scrollViewRef.current.scrollTo({ x: offsetX, animated: true });
            }
        } catch (error) {
            console.log("Error:", error);
        }
    }

    /** function for rendering categories */
    const _renderCategories = () => {
        return (
            allCategories?.map((item, i) => {
                return (
                    <View key={i.toString()}>
                        <CategoryItem
                            item={item}
                            onCategoryItemPress={() => {
                                setPage(1);
                                setCurrentCategory(item);
                                setSelectedIndex(i);
                                _handleScrollViewPress(i);
                                setTotalPages(Math.ceil(item?.product_count / 10));
                            }}
                            selectedIndex={selectedIndex}
                            index={i}
                        />
                    </View>
                )
            })
        )
    }

    /** function for handling end of flatlis: */
    function _handleEndReached() {
        setPage(page + 1);
        setLoadingPagination(true);
    }

    /** function for rendering footer loader */
    const _renderFooterLoader = () => {
        if (loadingPagination) {
            return <Loading />
        }
    }

    /** function for rendering products selected cateogry */
    const _renderCategoryProducts = () => {
        if (loadingProducts) {
            return <Loading />
        }
        if (categoryProducts?.length > 0) {
            return (
                <FlatList
                    data={categoryProducts}
                    renderItem={({ item, index }) => {
                        return (
                            <ProductItem
                                item={item}
                                onProductItemPress={() => { navigation.navigate(screens.productDetailOrderTabScreen, { product: item }) }}
                                onAddToCartPress={(obj) => { 
                                    setIsCartModalVisible(!isCartModalVisible);
                                    setSelectedCartItem(obj);
                                }}
                            />
                        )
                    }}
                    keyExtractor={(item, index) => index.toString()}
                    bounces={false}
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                    numColumns={2}
                    contentContainerStyle={{ paddingBottom: 20 }}
                    columnWrapperStyle={{ marginTop: 10 }}
                    onEndReached={() => {
                        if (!loadingPagination && page <= totalPages) {
                            _handleEndReached();
                        }
                    }}
                    onEndReachedThreshold={0.1}
                    ListFooterComponent={_renderFooterLoader()}
                />
            )
        } else {
            return null
        }
    }

    /** function for fetching categories */
    async function _fetchCategories() {
        try {
            const url = 'all/V1/categories';
            const methode = "GET";
            const data = undefined;
            const response = await fetchData(url, methode, data, token);
            const defaultCategory = response?.data?.children_data[0];
            const defaultSubCategory = defaultCategory?.children_data[2];
            const defaultSubSubCategory = defaultSubCategory?.children_data[0];
            const tempCategory = defaultSubSubCategory?.children_data;
            setAllCategories(tempCategory);
            setCurrentCategory(tempCategory[0]);
            setTotalPages(Math.ceil(tempCategory[0]?.product_count / 10));
            setSelectedIndex(0);

        } catch (error) {
            console.log("Error:", error);
        }
    }

    /** function for fetching products from one category */
    async function _fetchProductsForCategory(category, page) {
        try {
            const methode = "GET";
            const data = undefined;
            const searchCriteria = generateSearchCiteria({
                category_id: { value: category?.id, condition_type: "eq" },
                pageSize: { value: 10 },
                currentPage: { value: page }
            });
            let url = appendSearchCiteria(`all/V1/products`, searchCriteria);
            const response = await fetchData(url, methode, data, token);
            const products = response?.data?.items;
            updateProducts(products, page);
            setLoadingProducts(false);
            setLoadingPagination(false);

        } catch (error) {
            console.log("Error:", error);
            setLoadingProducts(false);
            setLoadingPagination(false);
        }
    }

    /** main useEffect */
    React.useEffect(() => {
        _fetchCategories();
    }, []);

    /** useEffect for fetching category products from server */
    React.useEffect(() => {
        if (page === 1) {
            setLoadingProducts(true);
        }
        _fetchProductsForCategory(currentCategory, page);
    }, [currentCategory, page]);

    return (
        <>
            <SafeAreaView style={styles.container}>
                <ScrollView bounces={false} nestedScrollEnabled={true} contentContainerStyle={{ flex: 1 }} showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
                    <Header
                        showRightIcon
                        onRightIconPress={() => { navigation.navigate(screens.moreTab, { screen: screens.cartScreen }) }}
                    />
                    <View style={{ backgroundColor: appColors.baseColor }}>
                        <Text style={styles.textTitle}>{__("Naš meni").toUpperCase()}</Text>
                        <ScrollView
                            ref={scrollViewRef}
                            scrollEnabled={true}
                            nestedScrollEnabled={true}
                            contentContainerStyle={{ paddingHorizontal: 15 }}
                            horizontal
                            showsVerticalScrollIndicator={false}
                            showsHorizontalScrollIndicator={false}
                        >
                            {_renderCategories()}
                        </ScrollView>
                    </View>
                    <View style={{ marginTop: 5, flex: 1, backgroundColor: appColors.white, flex: 1 }}>
                        {_renderCategoryProducts()}
                    </View>
                </ScrollView>
            </SafeAreaView>
            <CartModal
                isVisible={isCartModalVisible}
                onBackDropPress={() => { 
                    setSelectedCartItem(null);
                    setIsCartModalVisible(false) 
                }}
                selectedCartItem={selectedCartItem}
            />
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: appColors.baseColor
    },
    textTitle: {
        fontSize: 37,
        color: appColors.white,
        alignSelf: 'center',
        marginTop: 10,
        ...globalStyles.textFontExtraBold
    },
})

export default OrderMainScreen;
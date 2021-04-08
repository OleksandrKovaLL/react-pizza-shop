import React from 'react'

import { useSelector, useDispatch } from 'react-redux';
import { setCategory, setSortBy } from '../redux/actions/filters';
import { fetchPizzas } from '../redux/actions/pizzas';

import { Categories, SortPopup, PizzaBlock, PizzaLoadingBlock } from '../components';

const categoryNames = ['Meat', 'Vegetarian', 'Grill', 'Spicy', 'Closed'];

const sortItems = [
    { name: 'popularity', type: 'popular', order: 'desc' },
    { name: 'price', type: 'price', order: 'desc' },
    { name: 'alphabet', type: 'name', order: 'asc' },
];

function Home() {
    const dispatch = useDispatch();
    const { items } = useSelector(({ pizzas }) => {
        return {
            items: pizzas.items,
        };
    });

    const isLoaded = useSelector(({ pizzas }) => pizzas.isLoaded);
    const { category, sortBy } = useSelector(({ filters }) => filters);
    const cartItems = useSelector(({ cart }) => cart.items);

    React.useEffect(() => {

        dispatch(fetchPizzas(sortBy, category));

    }, [category, sortBy]);

    const onSelectCategory = React.useCallback((index) => {
        dispatch(setCategory(index));
    }, []);

    const onSelectSortType = React.useCallback((type) => {
        dispatch(setSortBy(type));
    }, []);

    const handleAddPizzaToCart = (obj) => {
        dispatch({
            type: 'ADD_PIZZA_CART',  //addPizzaToCard action
            payload: obj,
        });
    };

    return (
        <div className="container">
            <div className="content__top">
                <Categories
                    activeCategory={category}
                    onClickCategory={onSelectCategory}
                    items={categoryNames}
                />
                <SortPopup activeSortType={sortBy.type}
                    items={sortItems}
                    onClickSortType={onSelectSortType} />
            </div>
            <div className="content__items">
                {isLoaded
                    ? items.map((obj) => (
                        <PizzaBlock
                            onClickAddPizza={handleAddPizzaToCart}
                            key={obj.id}
                            addedCount={cartItems[obj.id] && cartItems[obj.id].items.length}
                            {...obj}
                        />
                    ))
                    : Array(12).
                        fill(0)
                        .map((_, index) => <PizzaLoadingBlock key={index} />)}
            </div>
        </div>
    )
}

export default Home;

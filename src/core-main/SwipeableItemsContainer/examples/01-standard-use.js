import React from "react";
import {SwipeableItemsContainer, L} from "storefront-ui";

import {rslin} from "responsive-helpers";

/** @jsx jsx */
import {css, jsx} from "@emotion/core";

import Rectangle from "../../../../docs-utils/Rectangle";

export default () => (
    <div>
        <p>Simplest use case</p>
        <SwipeableItemsContainer mode={"horizontal"}>
            <Rectangle color={"coral"}>1</Rectangle>
            <Rectangle color={"darkgoldenrod"}>2</Rectangle>
            <Rectangle color={"maroon"}>3</Rectangle>
            <Rectangle color={"navy"}>4</Rectangle>
            <Rectangle color={"firebrick"}>5</Rectangle>
            <Rectangle color={"forestgreen"}>6</Rectangle>
        </SwipeableItemsContainer>

        <p>Gutter</p>
        <SwipeableItemsContainer mode={"horizontal"} gutter={10}>
            <Rectangle color={"coral"}>1</Rectangle>
            <Rectangle color={"darkgoldenrod"}>2</Rectangle>
            <Rectangle color={"maroon"}>3</Rectangle>
            <Rectangle color={"navy"}>4</Rectangle>
            <Rectangle color={"firebrick"}>5</Rectangle>
            <Rectangle color={"forestgreen"}>6</Rectangle>
        </SwipeableItemsContainer>

        <p>Fixed item size</p>
        <SwipeableItemsContainer mode={"horizontal"} gutter={10} itemSize={300}>
            <Rectangle color={"coral"}>1</Rectangle>
            <Rectangle color={"darkgoldenrod"}>2</Rectangle>
            <Rectangle color={"maroon"}>3</Rectangle>
            <Rectangle color={"navy"}>4</Rectangle>
            <Rectangle color={"firebrick"}>5</Rectangle>
            <Rectangle color={"forestgreen"}>6</Rectangle>
        </SwipeableItemsContainer>

        <p>Responsive item size</p>
        <SwipeableItemsContainer mode={"horizontal"} gutter={10} itemSize={{xs: 200, lg: 300}}>
            <Rectangle color={"coral"}>1</Rectangle>
            <Rectangle color={"darkgoldenrod"}>2</Rectangle>
            <Rectangle color={"maroon"}>3</Rectangle>
            <Rectangle color={"navy"}>4</Rectangle>
            <Rectangle color={"firebrick"}>5</Rectangle>
            <Rectangle color={"forestgreen"}>6</Rectangle>
        </SwipeableItemsContainer>

        <p><code>itemsVisible</code>, you can use it to set width of item without setting <code>itemSize</code><br/>Additionaly,
            we changed here gutter to layout gutter.</p>
        <SwipeableItemsContainer mode={"horizontal"} gutter={L.gutter} itemsVisible={3}>
            <Rectangle color={"coral"}>1</Rectangle>
            <Rectangle color={"darkgoldenrod"}>2</Rectangle>
            <Rectangle color={"maroon"}>3</Rectangle>
            <Rectangle color={"navy"}>4</Rectangle>
            <Rectangle color={"firebrick"}>5</Rectangle>
            <Rectangle color={"forestgreen"}>6</Rectangle>
        </SwipeableItemsContainer>

        <p><code>itemsVisible</code> with responsive amount of elements</p>
        <SwipeableItemsContainer mode={"horizontal"} gutter={L.gutter} itemsVisible={{xs: 1, md: 2, lg: 3, xl: 4}}>
            <Rectangle color={"coral"}>1</Rectangle>
            <Rectangle color={"darkgoldenrod"}>2</Rectangle>
            <Rectangle color={"maroon"}>3</Rectangle>
            <Rectangle color={"navy"}>4</Rectangle>
            <Rectangle color={"firebrick"}>5</Rectangle>
            <Rectangle color={"forestgreen"}>6</Rectangle>
        </SwipeableItemsContainer>

        <p><code>offsetBefore</code> and <code>offsetAfter</code></p>
        <SwipeableItemsContainer mode={"horizontal"} gutter={L.gutter} offsetBefore={rslin(25, 50)} offsetAfter={50}>
            <Rectangle color={"coral"}>1</Rectangle>
            <Rectangle color={"darkgoldenrod"}>2</Rectangle>
            <Rectangle color={"maroon"}>3</Rectangle>
            <Rectangle color={"navy"}>4</Rectangle>
            <Rectangle color={"firebrick"}>5</Rectangle>
            <Rectangle color={"forestgreen"}>6</Rectangle>
        </SwipeableItemsContainer>

        <p>By default, slides are snapped to the left offset of container (<code>snap='offset'</code>). Other modes are
            available too.</p>
        <p><code>snap='center'</code> - snaps slides to center if possible</p>
        <SwipeableItemsContainer mode={"horizontal"} itemSize={250} gutter={20} offsetBefore={50} offsetAfter={50} snap={"center"}>
            <Rectangle color={"coral"}>1</Rectangle>
            <Rectangle color={"darkgoldenrod"}>2</Rectangle>
            <Rectangle color={"maroon"}>3</Rectangle>
            <Rectangle color={"navy"}>4</Rectangle>
            <Rectangle color={"firebrick"}>5</Rectangle>
            <Rectangle color={"forestgreen"}>6</Rectangle>
        </SwipeableItemsContainer>
    </div>
);

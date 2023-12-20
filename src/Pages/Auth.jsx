import React from "react";
import TabContainer from "../Tab/TabContainer";
import TabHeader from "../Tab/Components/TabHeader";
import TabContent from "../Tab/Components/TabContent";

export default function Auth() {
    return (
        <TabContainer>
            <TabHeader>Test 1</TabHeader>
            <TabHeader>Test 2</TabHeader>

            <TabContent>Test 1 content</TabContent>
            <TabContent>Test 2 content</TabContent>
        </TabContainer>
    )
}
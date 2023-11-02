'use client';
import { Accordion } from 'flowbite-react';
export default function FAQ() {
    return (
        <Accordion collapseAll>
            <Accordion.Panel>
                <Accordion.Title>
                    How do I place an order on the grocery website?
                </Accordion.Title>
                <Accordion.Content>
                    <p className="mb-2 text-gray-500 dark:text-gray-400">
                        <p style={{ textAlign: "justify" }}>
                            To place an order on our grocery website, follow these steps:
                            Browse the website and add the items you want to your cart.
                            Review your cart to ensure you have selected the correct products and quantities.
                            Proceed to the checkout, where you will provide your delivery address and payment information.
                            Confirm your order, and you will receive an order confirmation with the expected delivery time.
                        </p>
                    </p>

                </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
                <Accordion.Title>
                    What are the delivery options and fees?
                </Accordion.Title>
                <Accordion.Content>
                    <p className="mb-2 text-gray-500 dark:text-gray-400">
                        <p style={{ textAlign: "justify" }}>
                            We offer several delivery options, including standard and express delivery. The delivery fees vary based on your location, order size, and chosen delivery speed. You can find the specific delivery options and fees during the checkout process. We often provide free delivery for orders over a certain amount or to loyal customers who meet specific criteria.
                        </p>
                    </p>

                </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
                <Accordion.Title>
                    How do I track my order?
                </Accordion.Title>
                <Accordion.Content>
                    <p className="mb-2 text-gray-500 dark:text-gray-400">
                        <p style={{ textAlign: "justify" }}>
                            Tracking your order is easy. After placing an order, you will receive an email or SMS with a link to track your delivery. You can also log in to your account on our website to check the real-time status of your order. This tracking information includes the current location of your delivery and an estimated time of arrival. If you have any issues or questions about your order, our customer support team is available to assist you.
                        </p>
                    </p>

                </Accordion.Content>
            </Accordion.Panel>
        </Accordion>
    );
}



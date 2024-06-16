import EventHandlerInterface from "../../../@shared/event/event-handler.interface";
import Customer from "../../entity/customer";
import CustomerAddressChangedEvent from "../customer-address-changed.event";

export default class SentConsoleLogWhenCustomerAddressIsChangedHandler
    implements EventHandlerInterface<CustomerAddressChangedEvent>
{
    handle(event: CustomerAddressChangedEvent): void {
        const customer : Customer = event.eventData;
        console.log(`Customer address: ${customer.id}, ${customer.name} changed to: ${customer.Address.toString()}`);
    }
}
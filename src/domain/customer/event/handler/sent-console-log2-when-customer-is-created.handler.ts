import EventHandlerInterface from "../../../@shared/event/event-handler.interface";
import CustomerCreatedEvent from "../customer-created.event";

export default class SentConsoleLog2WhenCustomerIsCreatedHandler
  implements EventHandlerInterface<CustomerCreatedEvent>
{
  handle(event: CustomerCreatedEvent): void {
    console.log(`SentConsoleLog2WhenCustomerIsCreatedHandler: Customer created with data: ${JSON.stringify(event.eventData)}`);
  }
}
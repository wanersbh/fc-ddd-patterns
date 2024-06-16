import EventHandlerInterface from "../../../@shared/event/event-handler.interface";
import CustomerCreatedEvent from "../customer-created.event";

export default class SentConsoleLog1WhenCustomerIsCreatedHandler
  implements EventHandlerInterface<CustomerCreatedEvent>
{
  handle(event: CustomerCreatedEvent): void {
    console.log(`SentConsoleLog1WhenCustomerIsCreatedHandler: Customer created with data: ${JSON.stringify(event.eventData)}`);
  }
}
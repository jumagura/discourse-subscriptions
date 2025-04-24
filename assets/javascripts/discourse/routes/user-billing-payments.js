import Route from "@ember/routing/route";
import UserPayment from "../models/user-payment";

export default class UserBillingPaymentsRoute extends Route {
  templateName = "user/billing/payments";

  model() {
    return UserPayment.findAll();
  }
}

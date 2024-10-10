import Route from "@ember/routing/route";
import UserPayment from "../models/user-payment";

export default Route.extend({
  templateName: "user/billing/payments",

  model() {
    return UserPayment.findAll();
  },
});

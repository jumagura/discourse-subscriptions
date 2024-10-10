import Route from "@ember/routing/route";
import AdminSubscription from "../models/admin-subscription";

export default Route.extend({
  model() {
    return AdminSubscription.find();
  },
});

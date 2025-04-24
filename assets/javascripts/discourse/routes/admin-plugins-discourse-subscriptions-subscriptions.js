import Route from "@ember/routing/route";
import AdminSubscription from "../models/admin-subscription";

export default class AdminPluginsDiscourseSubscriptionsSubscriptionsRoute extends Route {
  model() {
    return AdminSubscription.find();
  }
}

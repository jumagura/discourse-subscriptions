import Route from "@ember/routing/route";
import AdminPlan from "../models/admin-plan";

export default class AdminPluginsDiscourseSubscriptionsPlansIndexRoute extends Route {
  model() {
    return AdminPlan.findAll();
  }
}

import Route from "@ember/routing/route";
import AdminPlan from "../models/admin-plan";

export default Route.extend({
  model() {
    return AdminPlan.findAll();
  },
});

import { action } from "@ember/object";
import Route from "@ember/routing/route";
import AdminCoupon from "../models/admin-coupon";

export default Route.extend({
  model() {
    return AdminCoupon.list();
  },

  @action
  reloadModel() {
    this.refresh();
  },
});

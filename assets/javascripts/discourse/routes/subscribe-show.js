import Route from "@ember/routing/route";
import Plan from "../models/plan";
import Product from "../models/product";
import Subscription from "../models/subscription";

export default Route.extend({
  model(params) {
    const product_id = params["subscription-id"];

    return Subscription.show(product_id).then((result) => {
      result.product = Product.create(result.product);
      result.plans = result.plans.map((plan) => {
        return Plan.create(plan);
      });

      return result;
    });
  },
});

import Controller from "@ember/controller";
import { action, computed } from "@ember/object";
import { service } from "@ember/service";
import { popupAjaxError } from "discourse/lib/ajax-error";

export default class AdminPluginsDiscourseSubscriptionsProductsShowController extends Controller {
  @service router;
  @service site;

  selectedGroups = [];

  @computed("site.groups.[]")
  get availableGroups() {
    return (this.site.groups || [])
      .map((g) => {
        return g.id === 0 ? null : { id: g.id, name: g.name };
      })
      .filter(Boolean);
  }

  @action
  onChangeGroups(selected) {
    this.set("selectedGroups", selected || []);
  }

  @action
  cancelProduct() {
    this.router.transitionTo("adminPlugins.discourse-subscriptions.products");
  }

  @action
  createProduct() {
    const groupIds = this.selectedGroups || [];
    this.model.product
      .save({ group_ids: groupIds })
      .then((product) => {
        this.router.transitionTo(
          "adminPlugins.discourse-subscriptions.products.show",
          product.id
        );
      })
      .catch(popupAjaxError);
  }

  @action
  updateProduct() {
    const groupIds = this.selectedGroups || [];
    this.model.product
      .update({ group_ids: groupIds })
      .then(() => {
        this.router.transitionTo(
          "adminPlugins.discourse-subscriptions.products"
        );
      })
      .catch(popupAjaxError);
  }
}
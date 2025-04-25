# frozen_string_literal: true
class AddGroupIdsToDiscourseSubscriptionsProducts < ActiveRecord::Migration[7.1]
  def change
    add_column :discourse_subscriptions_products, :group_ids, :jsonb, null: false, default: []
  end
end
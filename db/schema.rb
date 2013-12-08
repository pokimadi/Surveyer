# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20131208192345) do

  create_table "car_specs", force: true do |t|
    t.string   "carType"
    t.string   "session_carMake"
    t.string   "session_carModel"
    t.string   "session_carYear"
    t.string   "carFuel"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "choices", force: true do |t|
    t.string   "person"
    t.string   "expected_time"
    t.string   "choice"
    t.string   "confidence"
    t.string   "condition"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "scenario"
  end

  create_table "socials", force: true do |t|
    t.string   "gender"
    t.string   "session_age"
    t.string   "status"
    t.string   "employStat"
    t.string   "occupation"
    t.string   "session_otherOccupation"
    t.string   "session_personCount"
    t.string   "lisence"
    t.string   "transitPass"
    t.string   "session_otherTpass"
    t.string   "houseType"
    t.string   "session_otherHtype"
    t.string   "session_veichleCount"
    t.string   "yearIncome"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "trips", force: true do |t|
    t.boolean  "complete"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "session_timeTrip"
    t.string   "session_earlyTime"
    t.string   "session_lateTime"
    t.string   "origin"
    t.string   "session_otherOrigin"
    t.string   "origin_address"
    t.string   "destination"
    t.string   "session_otherDestin"
    t.string   "destination_address"
    t.string   "regDist"
    t.string   "session_regName"
    t.string   "purpose"
    t.string   "session_otherPurpose"
    t.string   "main"
    t.string   "session_mainOther"
    t.string   "session_numMain"
    t.string   "otherMain"
    t.string   "mainTransit"
    t.string   "session_accessStation"
    t.string   "accessMode"
    t.string   "session_otherAccess"
    t.string   "accessRegion"
    t.string   "accessTransit"
    t.string   "session_parkCost"
    t.string   "session_accessTime"
    t.string   "session_accessCost"
    t.string   "session_waitTime"
    t.string   "session_numTrans"
    t.string   "session_transWait"
    t.string   "session_travelTime"
    t.string   "session_travelCost"
    t.string   "session_egressStop"
    t.string   "egressMode"
    t.string   "session_otherEgress"
    t.string   "egressTransit"
    t.string   "session_egressTime"
    t.string   "session_egressCost"
    t.string   "session_oneTime"
    t.string   "session_oneCost"
    t.string   "transitPay"
    t.string   "monthCom"
    t.string   "bossPay"
  end

end

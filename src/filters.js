import Vue from "vue";

// Make UpperCase
Vue.filter("upperCase", function (v) {
  return v.toUpperCase();
});

// Make Revers
Vue.filter("revers", function (v) {
  return v.split("").reverse().join("");
});

// Make shorter text
Vue.filter("shorterText", function (value, textlength, suffix) {
  return value.substring(0, textlength) + suffix;
});

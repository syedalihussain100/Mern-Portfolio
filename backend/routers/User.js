const {
  getUser,
  login,
  logout,
  myProfile,
  Contact,
  UpdateUser,
  addTimeline,
  addProject,
  deleteTimeline,
  deleteProject,
  addYoutube,
  deleteYoutube
} = require("../Controller/User");
const { isAuthenticated } = require("../middleware/Auth");
const express = require("express");

const router = express.Router();


router.route(`/login`).post(login);
router.route(`/logout`).get(logout);
router.route(`/user`).get(getUser);

router.route(`/myprofile`).get(isAuthenticated, myProfile);

router.route(`/contact`).post(Contact);
//
router.route(`/admin/update`).put(isAuthenticated, UpdateUser);
// add
router.route(`/admin/timeline/add`).post(isAuthenticated, addTimeline);
router.route(`/admin/youtube/add`).post(isAuthenticated, addYoutube);
router.route(`/admin/project/add`).post(isAuthenticated, addProject);

//  delete
router.route(`/admin/timeline/:id`).delete(isAuthenticated, deleteTimeline);
router.route(`/admin/project/:id`).delete(isAuthenticated, deleteProject);
router.route(`/admin/youtube/:id`).delete(isAuthenticated, deleteYoutube);
//  end


module.exports = { router };

// url: String,
// title: String,
// avatar: String,
// public_id: String,

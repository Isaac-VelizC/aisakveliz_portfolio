import type { ContactInterface } from "../interface/Contact";
import axiosClient from "./axiosClient";

export const InfoService = {
  async getAbout() {
    const res = await axiosClient.get("/a/about/");
    return res.data;
  },

  async getServices() {
    const res = await axiosClient.get("/s/services/");
    return res.data.results;
  },

  async getSocialLinks() {
    const res = await axiosClient.get("/c/socials/");
    return res.data;
  },

  async getProjects() {
    const res = await axiosClient.get("/p/project/");
    return res.data.results;
  },

  async getTechnology() {
    const res = await axiosClient.get("/t/category/");
    return res.data; // o ajusta según sea necesario
  },

  async postContactMessage(data: ContactInterface) {
    const res = await axiosClient.post("/c/contact/", data);
    return res.data;
  },
};

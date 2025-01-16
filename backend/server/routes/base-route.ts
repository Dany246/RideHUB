import {Hono } from "hono";

export const baseRoute = new Hono()
    .get("/", async (c) =>{return c.json({message: "Hello World"})})
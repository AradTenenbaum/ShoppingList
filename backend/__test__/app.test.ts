import request from "supertest";

import app from "../src/app";
import { expect, describe, test } from "@jest/globals";

describe("Test app.ts", () => {
  test("Catch-all route", async () => {
    const res = await request(app).get("/");
    expect(res.body).toEqual({ message: "Server is running..." });
  });
});

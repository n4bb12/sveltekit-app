import { dev } from "$app/env"
import cookie from "cookie"
import { nanoid } from "nanoid"

import type { GetSession, Handle } from "@sveltejs/kit"

export const handle: Handle = async ({ request, render }) => {
  const cookies = cookie.parse(request.headers.cookie || "")
  const userid = cookies.userid || nanoid()

  request.locals.userid = userid

  const response = await render(request)

  if (!cookies.userid) {
    response.headers["set-cookie"] = cookie.serialize("userid", userid, {
      path: "/",
      httpOnly: true,
      secure: !dev,
    })
  }

  return response
}

export const getSession: GetSession = async (request) => {
  return { foo: "bar" }
}

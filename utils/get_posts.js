import { PrismaClient } from "@prisma/client";
import { getSession } from "@auth0/nextjs-auth0";

// this method will get all of the todos for the user
const handler = async (req, res) => {
  // init db session
  const prisma = new PrismaClient();

  // get the user id from session
  const session = getSession(req, res);
  const uid = session.user.sub;

  // TODO #5: fill in the body to do the following:
  // find a user with the "findFirst" method
  // create the user if the user does not exist
  // get all of the posts (not just the user's but all posts) and then send them back as the response
};

export default handler;

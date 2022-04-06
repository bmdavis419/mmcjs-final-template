import { PrismaClient } from "@prisma/client";
import { getSession } from "@auth0/nextjs-auth0";

// this method will create a new todo and save it to the DB
const handler = async (req, res) => {
  // init db session
  const prisma = new PrismaClient();

  // get the user id from session
  const session = getSession(req, res);
  const uid = session.user.sub;

  // get the post id
  const { post_id } = req.query;

  // TODO #6: update the post that was passed in as an arguement (post_id) by creating many comments from the req body
  // see week 12 for a very similar example
  // make sure to include comment so they can be sent back in the response

  res.status(201).json({ ...post.comments[post.comments.length - 1] });
};

export default handler;

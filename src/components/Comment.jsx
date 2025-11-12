import React from "react";

const SingleComment = ({ data }) => {
  const { name, text } = data;
  return (
    <div className="p-3 bg-gray-200 rounded-lg my-2 shadow-sm">
      <div className="flex items-center space-x-2">
        <img
          className="w-8 h-8 rounded-full"
          src={`https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=random`}
          alt={name}
        />
        <h3 className="font-semibold text-gray-800">{name}</h3>
      </div>
      <p className="ml-10 mt-1 text-gray-700 text-sm">{text}</p>
    </div>
  );
};

// Recursive component for nested replies
const CommentsList = ({ comments }) => {
  return comments.map((comment) => (
    <div key={comment.id}>
      <SingleComment data={comment} />
      {comment.replies && comment.replies.length > 0 && (
        <div className="pl-6 border-l-2 border-gray-300 ml-6">
          <CommentsList comments={comment.replies} />
        </div>
      )}
    </div>
  ));
};

const Comment = () => {
  const commentsData = [
    {
      id: 1,
      name: "Aarav Sharma",
      text: "This video explained the concept so clearly! Thanks a ton 😊",
      replies: [
        {
          id: 2,
          name: "Meera Singh",
          text: "Totally agree! The examples made it so easy to understand.",
          replies: [],
        },
      ],
    },
    {
      id: 3,
      name: "Rohan Patel",
      text: "Can someone explain the part at 3:45? I got a bit confused there.",
      replies: [
        {
          id: 4,
          name: "Kavya Iyer",
          text: "It’s about how async functions return promises. I can clarify if you want.",
          replies: [
            {
              id: 5,
              name: "Rohan Patel",
              text: "Ahh got it now. Thanks, Kavya! 🙌",
              replies: [
                {
              id: 5,
              name: "Rohan Patel",
              text: "Ahh got it now. Thanks, Kavya! 🙌",
              replies: [],
            },
              ],
            },            
          ],
        },
      ],
    },
    {
      id: 6,
      name: "Ankit Verma",
      text: "This channel deserves way more subscribers!",
      replies: [],
    },
    {
      id: 7,
      name: "Sneha Gupta",
      text: "I’ve been struggling with this topic for weeks, and this finally made sense. ❤️",
      replies: [],
    },
    {
      id: 8,
      name: "Rahul Das",
      text: "Could you please make a follow-up video on optimization techniques?",
      replies: [],
    },
  ];

  return (
    <div className="p-5 w-3xl">
      <h2 className="text-lg font-bold mb-3 text-gray-800">Comments:</h2>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default Comment;

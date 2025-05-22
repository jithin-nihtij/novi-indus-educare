import { TiltedButton } from "../TiltedButton";
import Image from "next/image";
import { Header } from "../Header";

const posts = [
  {
    title: "Top tips for effective home tutoring",
    description:
      "Share practical advice on how students can make the most out of tutoring sessions.",
    image: "/assets/blogPosts/blogOne.png",
  },
  {
    title: "Building a productive study environment",
    description:
      "Share practical advice on how students can make the most out of tutoring sessions. ",
    image: "/assets/blogPosts/blogTwo.png",
  },
  {
    title: "5 Skills every great tutor should have",
    description:
      "Outline essential skills for tutors, such as patience, adaptability, subject knowledge.",
    image: "/assets/blogPosts/blogThree.png",
  },
  {
    title: "Getting the best individual tuition ",
    description:
      "Share practical advice on how students can make the most out of tutoring sessions.",
    image: "/assets/blogPosts/blogFour.png",
  },
];

export const BlogPosts = () => {
  return (
    <section className="py-10">
      <div className="w-[90%] mx-auto space-y-4">
        <div className="flex justify-between flex-wrap space-y-4">
          <Header text="Our Latest" boldText="Blog Posts" />

          <div className="relative">
            <TiltedButton text="View all" />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-6">
          {posts.map((post) => (
            <PostsCard
              key={post.image}
              description={post.description}
              image={post.image}
              title={post.title}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const PostsCard = ({
  description,
  image,
  title,
}: {
  title: string;
  description: string;
  image: string;
}) => {
  return (
    <div className="space-y-4 rounded-lg">
      <Image
        src={image}
        alt="post"
        width={200}
        height={200}
        className="object-contain w-full"
        unoptimized
      />
      <p className="text-[#655945] font-semibold text-[24px]">{title}</p>
      <p className="text-[#65594599] font-semibold">{description}</p>
    </div>
  );
};

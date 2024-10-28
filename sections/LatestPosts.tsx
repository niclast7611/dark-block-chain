"use client";

import { BlogPostMetadata } from "@/app/api/files/route";
import Card from "@/components/Card";
import CutCornerButton from "@/components/CutCornerButton";
import Tag from "@/components/Tag";
import getColorForBlogPost from "@/public/utils/getColorForBlogPost";
import React, { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";

const LatestPosts = () => {
  const [sortedFiles, setSortedFiles] = useState<BlogPostMetadata[]>([]);
  useEffect(() => {
    fetch("/api/files")
      .then((res) => res.json())
      .then((data) => {
        setSortedFiles(data?.files);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <section className="py-60">
      <div className="container">
        <h2 className="font-heading font-black text-4xl text-center md:text-5xl">
          Your portal to everything blockchain.
        </h2>

        <p className="text-xl text-center text-zinc-400 mt-8">
          Keep up with the newest trends, updates, and insights in the
          blockchain world, updated weekly.
        </p>
        <div className="mt-16 gap-8 grid grid-cols-1 md:grid-cols-2">
          {sortedFiles?.map(({ title, category, description }, index) => (
            <Card
              key={index}
              buttonText="Read More"
              color={getColorForBlogPost(category)}
              // className={twMerge((index === 1 || index === 3) && "md:hidden")}
            >
              <Tag color={getColorForBlogPost(category)}> {category}</Tag>
              <h3 className="font-heading font-black text-3xl mt-4">{title}</h3>

              <p className="text-lg text-zinc-400 mt-6">{description}</p>
            </Card>
          ))}
        </div>
        <div className="flex justify-center mt-48">
          <CutCornerButton>Read the Blog</CutCornerButton>
        </div>
      </div>
    </section>
  );
};

export default LatestPosts;

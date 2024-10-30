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
        <div className="max-w-3xl mx-auto">
          <h2 className="font-heading font-black text-4xl text-center md:text-5xl lg:text-6xl">
            Your portal to everything blockchain.
          </h2>

          <p className="text-xl text-center text-zinc-400 mt-8 lg:text-2xl">
            Keep up with the newest trends, updates, and insights in the
            blockchain world, updated weekly.
          </p>
        </div>
        <div className="mt-16 md:mt-28 gap-8 grid grid-cols-1 md:grid-cols-2 ">
          <div className="flex flex-col gap-8">
            {sortedFiles?.map(({ title, category, description }, index) => (
              <Card
                key={index}
                buttonText="Read More"
                color={getColorForBlogPost(category)}
                className={twMerge((index === 1 || index === 3) && "md:hidden")}
              >
                <Tag color={getColorForBlogPost(category)}> {category}</Tag>
                <h3 className="font-heading font-black text-3xl mt-4">
                  {title}
                </h3>

                <p className="text-lg text-zinc-400 mt-6">{description}</p>
              </Card>
            ))}
          </div>
          <div className="hidden md:flex flex-col gap-8 mt-16">
            {sortedFiles?.map(({ title, category, description }, index) => (
              <Card
                key={index}
                buttonText="Read More"
                color={getColorForBlogPost(category)}
                className={twMerge((index === 0 || index === 2) && "md:hidden")}
              >
                <Tag color={getColorForBlogPost(category)}> {category}</Tag>
                <h3 className="font-heading font-black text-3xl mt-4">
                  {title}
                </h3>

                <p className="text-lg text-zinc-400 mt-6">{description}</p>
              </Card>
            ))}
          </div>
        </div>
        <div className="flex justify-center mt-48 md:mt-32">
          <CutCornerButton>Read the Blog</CutCornerButton>
        </div>
      </div>
    </section>
  );
};

export default LatestPosts;

import React, { FC } from "react";

const InfoItem_4: FC = () => {
  return (
    <div>
      <h2 className="fontSubTitle pb-[40px]">
        Four factors that contribute to a slow load time
      </h2>
      <p className="font20 pb-[20px] phone:pb-[40px]">
        A variety of factors can contribute to slow load times, including:
      </p>
      <p className="font20Bold">1. Bad HTML coding</p>
      <p className="font20 pb-[20px] phone:pb-[40px]">
        A sloppy HTML code on the backend of your site is a surefire way to
        ensure that your pages load slowly.
      </p>
      <p className="font20 pb-[20px] phone:pb-[40px]">
        HTML code is what tells your page how it should appear to visitors to
        your website. The code is made up of various tags that tell the page how
        to function and what to do.
      </p>
      <p className="font20 pb-[20px] phone:pb-[40px]">
        Each page on your website will have a code page, and the larger and more
        complex your website, the more complex your code. This is the point at
        which your code can easily become unorganized and sloppy.
      </p>
      <p className="font20 pb-[20px] phone:pb-[40px]">
        To keep your pages loading quickly, make sure there are no unnecessary
        tags and that everything is properly referenced. Otherwise, the server
        will take longer to read the code, resulting in a slow-loading site.
      </p>
      <p className="font20Bold">2. Extensive, unoptimized graphics</p>
      <p className="font20 pb-[20px] phone:pb-[40px]">
        The use of graphics on your website is critical to providing a positive
        user experience. When you provide a full page of information, for
        example, it's important to break it up with images, graphics, or video
        to keep the reader from becoming bored.
      </p>
      <p className="font20 pb-[20px] phone:pb-[40px]">
        All of the bells and whistles that you can add to your site pages in
        terms of graphics and videos, on the other hand, can weigh down your
        site and cause it to load slowly.
      </p>
      <p className="font20 pb-[20px] phone:pb-[40px]">
        One of the most common causes of slow-loading pages is large,
        high-resolution photos.
      </p>
      <p className="font20 pb-[20px] phone:pb-[40px]">
        So, how can you be sure that your site's graphics provide a great user
        experience while maintaining a quick page load time? Improve your
        graphics!
      </p>
      <p className="font20 pb-[20px] phone:pb-[40px]">
        Consider using a tool like Kraken.io to compress your image files so
        they aren't as large. It will not change the visual size of the image,
        but it will reduce the file size so that it takes less time to load on
        your website.
      </p>
      <p className="font20Bold">3. An increased number of redirects</p>
      <p className="font20 pb-[20px] phone:pb-[40px]">
        When you want to replace all links to an old webpage with references to
        a new one, you use redirects. The redirects are pieces of code that are
        placed in the servers. htaccess file and you can create as many as you
        need when replacing old pages on your site.
      </p>
      <p className="font20 pb-[20px] phone:pb-[40px]">
        When you have a lot of redirects on the same page, your site will take
        the time to reference the.htaccess file to find out where the link is
        pointing. This is equivalent to loading links twice on your page, which
        increases page load time.
      </p>
      <p className="font20Bold">4. Location and performance of the server</p>
      <p className="font20 pb-[20px] phone:pb-[40px]">
        One of the simpler factors to understand is that the bigger the distance
        between your server and your website is, the longer it will take to
        load. Having said that, it's important to be aware of where your server
        is located. If your company is based in the United States, don't choose
        a server in China.
      </p>
      <p className="font20 pb-[20px] phone:pb-[40px]">
        In contexts of server performance, you should look for a high-quality
        website hosting service. This is how it works:
      </p>
      <ul className="list-disc pl-[30px] pb-[20px] phone:pb-[40px]">
        <li className="font20">
          A user types your URL into their browser's search bar or visits your
          website via a search engine such as Google.
        </li>
        <li className="font20">
          Their browser notifies your server that they are attempting to visit
          your site and requests all of the information required to visit your
          page.
        </li>
        <li className="font20">
          If your server has high quality, the information will come quickly.
        </li>
      </ul>
      <p className="font20 pb-[20px] phone:pb-[40px]">
        Your server's quality is determined by whether it is shared or
        dedicated:
      </p>
      <ul className="list-disc pl-[30px] pb-[20px] phone:pb-[40px]">
        <li className="font20">
          Are you using a shared server? If this is the case, you are sharing
          server space and traffic with another website.
        </li>
        <li className="font20">
          Do you have a dedicated server? If this is the case, you can stop
          sharing website traffic with another website. You may have a much
          quicker loading time when you are on a dedicated server.
        </li>
      </ul>
    </div>
  );
};

export default InfoItem_4;

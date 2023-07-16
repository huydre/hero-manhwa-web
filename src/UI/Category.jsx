import peeking from '../assets/peeking.png'

const Category = () => {
  return (
    <div className="grid grid-cols-4 gap-6 items-center">
      <div className="w-[250px] h-[300px] rounded-xl text-left bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6QoK73tyhmS_xKQVWxOxMUZtL2gKR8xVXHQ&usqp=CAU')] bg-center bg-cover bg-red-700/95 bg-blend-overlay p-5 flex flex-col justify-between">
        <div className="italic font-bold text-[1.3rem]">DRAMA ROMANCE</div>
        <div className="italic">Enjoy the drama feel the sensation </div>
      </div>

      <div className="w-[250px] h-[300px] rounded-xl text-left bg-[url('https://images2.thanhnien.vn/528068263637045248/2023/7/5/anime-16885290131791004759743.jpg')] bg-center bg-cover bg-red-700/95 bg-blend-overlay p-5 flex flex-col justify-between">
        <div className="italic font-bold text-[1.3rem]">ACTION - ADVENTURE</div>
        <div className="italic">Feel the tension during the fight </div>
      </div>

      <div className="w-[250px] h-[300px] rounded-xl text-left bg-[url('https://static.fandomspot.com/images/03/5941/06-baki-the-grappler-anime.jpg')] bg-center bg-cover bg-red-700/95 bg-blend-overlay p-5 flex flex-col justify-between">
        <div className="italic font-bold text-[1.3rem]">MARTIAL ARTS</div>
        <div className="italic">Discover wonders during your adventure </div>
      </div>

      <div className="w-[250px] h-[300px] rounded-xl text-left bg-[url('https://i.ytimg.com/vi/O-r9wbhlSHY/maxresdefault.jpg')] bg-center bg-cover bg-red-700/95 bg-blend-overlay p-5 flex flex-col justify-between">
        <div className="italic font-bold text-[1.3rem]">SPORTS</div>
        <div className="italic">
          Focuses on stories involving sports and other athletic and competitive{" "}
        </div>
      </div>

      <div className="w-[250px] h-[300px] rounded-xl text-left bg-[url('https://i0.wp.com/animeindia.in/wp-content/uploads/2022/02/comdey.jpg?resize=1024%2C576&ssl=1')] bg-center bg-cover bg-red-700/95 bg-blend-overlay p-5 flex flex-col justify-between">
        <div className="italic font-bold text-[1.3rem]">COMEDY</div>
        <div className="italic">Immerse, Imagine, and Inspire</div>
      </div>

      <div className="w-[250px] h-[300px] rounded-xl text-left bg-[url('https://assets3.thrillist.com/v1/image/2847565/1000x666/flatten;crop;webp=auto;jpeg_quality=60.jpg')] bg-center bg-cover bg-red-700/95 bg-blend-overlay p-5 flex flex-col justify-between">
        <div className="italic font-bold text-[1.3rem]">HORROR</div>
        <div className="italic">Enjoy the feel of fear and scare of Manga </div>
      </div>

      <div className="w-[250px] h-[300px] rounded-xl text-left bg-[url('https://cdn.oneesports.vn/cdn-data/sites/4/2023/02/SpyxFamily-Forger-thumb.jpg')] bg-center bg-cover bg-red-700/95 bg-blend-overlay p-5 flex flex-col justify-between">
        <div className="italic font-bold text-[1.3rem]">FAMILY</div>
        <div className="italic">Feel the harm about family Manhwa</div>
      </div>

      <div className="relative w-[250px] h-[300px] rounded-xl text-left bg-[url('https://assets-prd.ignimgs.com/2022/08/17/top25animecharacters-blogroll-1660777571580.jpg')] bg-center bg-cover bg-red-700/95 bg-blend-overlay p-5 flex flex-col justify-between">
        <div className="italic font-bold text-[1.3rem]">SEE ALL GENRES MANGA</div>
        <div className="absolute translate-y-32">
          <img src={peeking} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Category;

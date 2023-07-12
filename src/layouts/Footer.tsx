import React, { useEffect, useState } from "react";
import { Divider, Space } from "antd";
import { TbWorld } from "react-icons/tb";
import { PiCaretUpBold } from "react-icons/pi";
import { FaAirbnb, FaInbox, FaMap, FaSearch } from "react-icons/fa";
import { FiHeart, FiUser } from "react-icons/fi";
import { useNavigate, useLocation } from "react-router-dom";

const data = [
  {
    name: "Explore",
    icon: <FaSearch size={22} color={"#b0b0b0"} />,
  },
  {
    name: "Wishlists",
    icon: <FiHeart size={22} color={"#b0b0b0"} />,
  },
  {
    name: "Trips",
    icon: <FaAirbnb size={22} color={"#b0b0b0"} />,
  },
  {
    name: "Inbox",
    icon: <FaInbox size={22} color={"#b0b0b0"} />,
  },
  {
    name: "Profile",
    icon: <FiUser size={22} color={"#b0b0b0"} />,
  },
];

const Footer: React.FC = () => {
  const [scroll, setScroll] = useState(window.scrollY);
  const navigate = useNavigate();
  const location = useLocation();
  const handleScroll = () => {
    setScroll(document.body.scrollHeight - window.scrollY);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div
        onClick={() =>
          location.pathname === "/" ? navigate("/map") : navigate("/")
        }
        className="fixed z-40 shadow cursor-pointer p-5 flex items-center text-[14px] left-[50%] -translate-x-[50%] h-8 text-white rounded-full bg-[#222222] bottom-16"
      >
        <span className="mr-2">
          {location.pathname === "/" ? "Show Map" : "Show List"}
        </span>
        <span className="inline-block mt-1">
          <FaMap />
        </span>
      </div>

      <div className="fixed w-full bottom-0 z-30 h-[7vh] border hidden md:flex items-center justify-between px-10 bg-white">
        <div>
          <Space size={20}>
            <span className="text-[14px] text-slate-600 font-semibold">
              © 2023 Airbnb, Inc
            </span>
            <span className="text-[14px] text-slate-600 font-semibold">
              Terms
            </span>
            <span className="text-[14px] text-slate-600 font-semibold">
              Sitemap
            </span>
            <span className="text-[14px] text-slate-600 font-semibold">
              Privacy
            </span>
            <Space size={10}>
              <span className="text-[14px] text-slate-600 font-semibold">
                Your Privacy Choices
              </span>
              <span className="inline-block mt-3">
                <svg width="26" height="12" fill="none">
                  <rect
                    x="0.5"
                    y="0.5"
                    width="25"
                    height="11"
                    rx="5.5"
                    fill="#fff"
                  ></rect>
                  <path d="M14 1h7a5 5 0 010 10H11l3-10z" fill="#06F"></path>
                  <path
                    d="M4.5 6.5l1.774 1.774a.25.25 0 00.39-.049L9.5 3.5"
                    stroke="#06F"
                    strokeLinecap="round"
                  ></path>
                  <path
                    d="M16.5 3.5L19 6m0 0l2.5 2.5M19 6l2.5-2.5M19 6l-2.5 2.5"
                    stroke="#fff"
                    strokeLinecap="round"
                  ></path>
                  <rect
                    x="0.5"
                    y="0.5"
                    width="25"
                    height="11"
                    rx="5.5"
                    stroke="#06F"
                  ></rect>
                </svg>
              </span>
            </Space>
            <span className="text-[14px] text-slate-600 font-semibold">
              {" "}
              Destinations
            </span>
          </Space>
        </div>
        <div className="flex items-center">
          <Space className="mr-3 text-[15px] font-semibold" size={10}>
            <TbWorld size={18} style={{ marginTop: 4 }} />
            <span>English (US)</span>
          </Space>
          <Space className="mr-2 text-[15px] font-semibold">
            <span>$</span>
            <span>USD</span>
          </Space>
          <Space className="text-[15px] font-semibold">
            <span>Support & resources</span>
            <PiCaretUpBold />
          </Space>
        </div>
      </div>
      {scroll > 1000 && (
        <div className="grid grid-cols-5 fixed bottom-0 h-[9vh] w-full z-30 px-5 md:hidden bg-white border">
          {data.map((d) => {
            return (
              <div
                key={d.name}
                className="col-span-1 pt-2 flex flex-col items-center justify-center"
              >
                <span className="inline-block mb-2">{d.icon}</span>
                <span className="text-[10px] font-bold text-[#535353]">
                  {d.name}
                </span>
              </div>
            );
          })}
        </div>
      )}
      <div className="px-8 border bg-[#f7f7f7] pt-[1.5rem] md:hidden block">
        <div className="flex flex-col">
          <h3 className="text-[14px] font-bold mb-2">Support</h3>
          <span className="text-[14px] mb-3">Help Center</span>
          <span className="text-[14px] mb-3">Get help with a safety issue</span>
          <span className="text-[14px] mb-3">AirCover</span>
          <span className="text-[14px] mb-3">
            Supporting people with disabilities
          </span>
          <span className="text-[14px] mb-3">Cancellation options</span>
          <span className="text-[14px] mb-3">Our COVID-19 Response</span>
          <span className="text-[14px] mb-3">
            Report a neighborhood concern
          </span>
        </div>

        <Divider />

        <div className="flex flex-col">
          <h3 className="text-[14px] font-bold mb-2">Community</h3>
          <span className="text-[14px] mb-3">
            Airbnb.org: disaster relief housing
          </span>
          <span className="text-[14px] mb-3">Combating discrimination</span>
        </div>

        <Divider />

        <div className="flex flex-col">
          <h3 className="text-[14px] font-bold mb-2">Hosting</h3>
          <span className="text-[14px] mb-3">Airbnb your home</span>
          <span className="text-[14px] mb-3">AirCover for Hosts</span>
          <span className="text-[14px] mb-3">Explore hosting resources</span>
          <span className="text-[14px] mb-3">Visit our community forum</span>
          <span className="text-[14px] mb-3">How to host responsibly</span>
          <span className="text-[14px] mb-3">Airbnb-friendly apartments</span>
        </div>

        <Divider />

        <div className="flex flex-col">
          <h3 className="text-[14px] font-bold mb-2">Airbnb</h3>
          <span className="text-[14px] mb-3">Newsroom</span>
          <span className="text-[14px] mb-3">Learn about new features</span>
          <span className="text-[14px] mb-3">Letter from our founders</span>
          <span className="text-[14px] mb-3">Careers</span>
          <span className="text-[14px] mb-3">Investors</span>
          <span className="text-[14px] mb-3">Gift cards</span>
        </div>

        <Divider />

        <div className="flex flex-col">
          <h3 className="text-[14px] font-bold mb-2">
            <div className="flex items-center gap-3">
              <TbWorld size={18} color={"d#ededed"} />
              <span className="text-[15px] font-medium">
                English (US) $ USD
              </span>
            </div>
          </h3>
          <span className="text-[14px] mb-3">© 2023 Airbnb, Inc.</span>
        </div>
      </div>
    </>
  );
};

export default Footer;

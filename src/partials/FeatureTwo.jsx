import React, { useState, useRef, useEffect } from 'react';
import Transition from '../utils/Transition';

import { items } from '../utils/items.js';
import { tabs } from '../utils/tabs.js';
import { BsFillMouse3Fill } from 'react-icons/bs';

import IconBase from './IconBase';

function FeatureTwo() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [currentTrack, setCurrentTrack] = useState({
    name: 'Stuck with U',
    artist: 'Ariana Grande',
    albumCover: 'https://upload.wikimedia.org/wikipedia/en/d/dc/Justin_Bieber_and_Ariana_Grande_-_Stuck_with_You.png',
  });
  const contentRef = useRef(null);

  const handleAction = (key) => {
    switch (key) {
      case 0:
        setActiveIndex((prevActiveIndex) => (prevActiveIndex > 0 ? prevActiveIndex - 1 : 0));
        break;
      case 1:
        setActiveIndex((prevActiveIndex) => (prevActiveIndex < 20 ? prevActiveIndex + 1 : 20));
        break;
      case 2:
        setCurrentTrack(items[key]);
      default:
        break;
    }
  };

  useEffect(() => {
    const el = contentRef.current;
    const activePage = Math.ceil((activeIndex + 1) / 6) - 1;

    el.scrollTo({
      top: activePage * 300,
      behavior: 'smooth',
    });
  }, [activeIndex]);

  return (
    <section className="relative">
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 ">
        <div className="pt-12 md:pt-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <BsFillMouse3Fill className="text-7xl inline-block text-center mb-3" />

            <div className="flex justify-center items-center">
              <h1 className="h2 mb-4">Say goodbye to the mouse</h1>
            </div>
            <p className="text-xl text-gray-600">Because moving your hand to the mouse is just too much work</p>
          </div>

          <div className="flex flex-wrap">
            <div className="w-full lg:w-4/12 lg:pr-4">
              <div className=" custom-container my-3 h-[630px]">
                <div className="text-2xl font-bold">Shortcuts</div>
                <p>Click to try them out!</p>
                <div className="pl-1 mt-5">
                  {tabs.map((obj, key) => {
                    return (
                      <div
                        className="shortcut-container"
                        key={key}
                        onClick={() => handleAction(key)}
                      >
                        <div className="w-[170px]">
                          {obj.buttons.map((kb, kbIndex) => {
                            return (
                              <kbd
                                className="kbd kbd-md mr-1"
                                key={kbIndex}
                              >
                                {kb}
                              </kbd>
                            );
                          })}
                        </div>
                        <div className="w-[100px]"> {obj.text}</div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="w-full lg:w-8/12 lg:pr-4">
              <div className=" custom-container my-3 h-[630px]">
                <div className="flex justify-center mt-5">
                  <div className="dialog">
                    <div className="searchContainer">
                      <input
                        placeholder="Search for your favourite songs, lyrics..."
                        className="searchBar"
                        spellCheck={false}
                        // value={searchVal}
                        // onChange={(e) => setSearchVal(e.target.value)}
                      />
                    </div>
                    <div className="commandWrapper">
                      <div className="nowPlaying">
                        <div className="widget">
                          <img
                            src={currentTrack.albumCover}
                            alt=""
                          />
                          <div className="currentTrack">
                            <h4>{currentTrack.name}</h4>
                            <p>{currentTrack.artist}</p>
                          </div>
                        </div>
                        <div className="controls">
                          <i className="ri-skip-back-fill"></i>
                          <i className={`ri-play-circle-fill`}></i>
                          <i className="ri-skip-forward-fill"></i>
                        </div>
                      </div>
                      <div
                        className="content"
                        ref={contentRef}
                      >
                        {items.map((item, key) => {
                          return (
                            <div
                              key={key}
                              className={activeIndex !== key ? 'option' : 'option active'}
                              // onClick={() => playSong(item)}
                            >
                              <div className="left">
                                <img
                                  key={key}
                                  src={item.albumCover}
                                  className="rounded-sm w-[30px] h-[30px] mr-3"
                                  alt=""
                                />
                                <div>
                                  <h4>{item.name.length > 36 ? item.name.substring(0, 35) + '...' : item.name}</h4>
                                  <p>{item?.artist}</p>
                                </div>
                              </div>
                              <div className="shortcuts"></div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                    <div className="footer">
                      <div>
                        <kbd>Esc</kbd>
                        <p>Quit</p>
                      </div>
                      <div>
                        <kbd>cmd</kbd>
                        <kbd>/</kbd>
                        <p>Search</p>
                      </div>
                      <div>
                        <kbd>shift</kbd>
                        <kbd>enter</kbd>
                        <p>Queue</p>
                      </div>
                      <div>
                        <kbd>enter</kbd>
                        <p>Play</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeatureTwo;

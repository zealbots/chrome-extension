import React, { Component } from "react";

export class Header extends Component {
  render() {
    return (
      <header className="h-15 fixed">
        <nav className="border-secondaryText border-b-2 bg-primaryBg text-secondaryText fixed left-0 right-0">
          <div className="navConent max-w-9xl mx-auto flex justify-between">
            <div className="logo flex px-4 items-center">
              <a
                href="https://www.zealbots.com/"
                target="_blank"
                className="flex items-center"
                rel="noreferrer"
              >
                <img
                  src="/zealbots-color.png"
                  alt="Zealbots"
                  width="138px"
                  height="30px"
                />
              </a>
            </div>
            <div className="btnMenu px-4 hidden md:flex space-x-1 items-center">
              <Bookmarks />
              <Dnd />
              <Layout />
              <Profile />
            </div>
          </div>
        </nav>
      </header>
    );
  }
}

export default Header;

class Bookmarks extends Component {
  clickHandle = (event) => {
    console.log("the event object is:", event);
    console.log("the target is", event.target);
    console.log("the currentTarget is", event.currentTarget);
    console.log("this is: ", this);
  };
  render() {
    return (
      <button
        className="rounded-lg my-3 hover:bg-btnHighlight transition duration-200"
        onClick={this.clickHandle}
        style={{ outline: "none !important" }}
      >
        <svg
          className="border-4 h-9 w-9 fill-current text-secondaryText hover:text-bookmark inline border-transparent"
          version="1.1"
          viewBox="0 0 24 24"
        >
          <path
            className="outline-none border-transparent border-0"
            pid="0"
            d="M7.828 4h8.343a2 2 0 011.996 1.878l.83 13.591a.5.5 0 01-.795.433l-5.608-4.144a1 1 0 00-1.189 0l-5.608 4.144a.5.5 0 01-.796-.433l.83-13.591A2 2 0 017.829 4z"
            fill-rule="evenodd"
          ></path>
        </svg>
      </button>
    );
  }
}

class Dnd extends Component {
  clickHandle = (event) => {
    console.log("the event object is:", event);
    console.log("the target is", event.target);
    console.log("the currentTarget is", event.currentTarget);
    console.log("this is: ", this);
  };
  render() {
    return (
      <button
        className="rounded-lg my-3 hover:bg-btnHighlight transition duration-200"
        onClick={this.clickHandle}
        style={{ outline: "none !important" }}
      >
        <svg
          className="border-4 h-9 w-9 fill-current text-secondaryText hover:text-primaryText inline border-transparent"
          version="1.1"
          viewBox="0 0 24 24"
        >
          <path
            pid="0"
            d="M4 17.881a1 1 0 011.784-.842 8 8 0 109.848-12.167 1.013 1.013 0 01-.078-.044 1.01 1.01 0 01.986-1.738c4.92 2.507 6.877 8.529 4.37 13.45-2.507 4.92-8.529 6.877-13.45 4.37a9.967 9.967 0 01-3.277-2.67.997.997 0 01-.183-.359zm5.563-2.835a.987.987 0 01-1.36-.354 1 1 0 01.366-1.366L11 11.923V7a1 1 0 012 0v5.432a1 1 0 01-.488.859l-2.95 1.755zM12 4a1 1 0 110-2 1 1 0 010 2zm-7.8 9.778a1 1 0 11-1.949.45 1 1 0 011.949-.45zm0-3.556a1 1 0 11-1.949-.45 1 1 0 011.949.45zm1.54-3.204a1 1 0 11-1.554-1.259 1 1 0 011.555 1.259zM8.534 4.79a1 1 0 11-.876-1.798 1 1 0 01.876 1.798z"
            fill-rule="evenodd"
          ></path>
        </svg>
      </button>
    );
  }
}

class Layout extends Component {
  clickHandle = (event) => {
    console.log("the event object is:", event);
    console.log("the target is", event.target);
    console.log("the currentTarget is", event.currentTarget);
    console.log("this is: ", this);
  };
  render() {
    return (
      <button
        className="rounded-lg my-3 hover:bg-btnHighlight transition duration-200"
        onClick={this.clickHandle}
        style={{ outline: "none !important" }}
      >
        <svg
          className="border-4 h-9 w-9 fill-current text-secondaryText hover:text-primaryText inline border-transparent"
          version="1.1"
          viewBox="0 0 24 24"
        >
          <path
            pid="0"
            d="M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h16a2 2 0 012 2v14zm-2-8V7a1 1 0 00-.883-.993L19 6H5a1 1 0 00-.993.883L4 7v4a1 1 0 00.883.993L5 12h14a1 1 0 001-1zM8 17v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1h2a1 1 0 001-1zm6 0v-2a1 1 0 00-.883-.993L13 14h-2a1 1 0 00-.993.883L10 15v2a1 1 0 00.883.993L11 18h2a1 1 0 001-1zm6 0v-2a1 1 0 00-.883-.993L19 14h-2a1 1 0 00-.993.883L16 15v2a1 1 0 00.883.993L17 18h2a1 1 0 001-1z"
            fill-rule="evenodd"
          ></path>
        </svg>
      </button>
    );
  }
}

class Profile extends Component {
  clickHandle = (event) => {
    console.log("the event object is:", event);
    console.log("the target is", event.target);
    console.log("the currentTarget is", event.currentTarget);
    console.log("this is: ", this);
  };
  render() {
    return (
      <button
        className="rounded-lg my-3 hover:bg-btnHighlight transition duration-200"
        onClick={this.clickHandle}
        style={{ outline: "none !important" }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="border-4 h-9 w-9  fill-current text-secondaryText hover:text-primaryText inline border-transparent"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
          />
        </svg>
      </button>
    );
  }
}

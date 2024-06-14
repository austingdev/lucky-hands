import React, { useCallback, useEffect, useState } from "react";
import { EE } from "../App";
import "../css/login.css";
import { PAGE_SIZE_DEFAULT } from "../common/Config";
import { post, relaxGamingVerifyToken } from "../server/server";

export const RelaxGamingLogin = () => {
    const [searchParams, setSearchParams] = useState({});
    const [imageLoaded, setImageLoaded] = useState(false);

    const updateParams = () => {
        console.log("==window.location.search===", window.location.search);
        const searchParams = new URLSearchParams(window.location.search);
        const paramsObj = {};
        searchParams.forEach((value, key) => {
            paramsObj[key] = value;
        });
        setSearchParams(paramsObj);
    };

    useEffect(() => {
        EE.addListener("RESIZE", onResize);
        EE.emit("FORCE_RESIZE");

        updateParams();

        // Listen for URL changes
        window.addEventListener("popstate", updateParams);
        window.addEventListener("hashchange", updateParams);
        window.addEventListener("load", updateParams);

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener("popstate", updateParams);
            window.removeEventListener("hashchange", updateParams);
            window.removeEventListener("load", updateParams);
        };
    }, []);

    useEffect(() => {
        onResize();
    }, [imageLoaded]);

    useEffect(() => {
        if (searchParams?.token) {
            verifyToken();
        }
    }, [searchParams]);

    const onResize = (data) => {
        var div = $("#gameLoadingBack");
        var width = div.width();
        div.css("height", (width * 61) / 673);
    };

    const verifyToken = useCallback(() => {
        const { gameId, token, env } = searchParams;
        var _token = document.getElementById("root").getAttribute("token");

        var data = { gameId, token, env, _token };
        relaxGamingVerifyToken(data, (res) => {
            console.log("===Relax Gaming Verify Token Response===", res);
            window.location.href = "/game/" + gameId + "?api_exit=/";
        });
    }, [searchParams]);

    const params = new URLSearchParams(window.location.search);

    return (
        <div className="popup" id="loading_popup">
            <div
                id="loading_popup_image"
                style={{
                    backgroundColor: "#000000",
                    backgroundImage: `url('/images/background--${params.get(
                        "gameId"
                    )}.jpg')`,
                }}
            >
                <img
                    id="lucky-hands-logo"
                    src="/images/lucky-hands-logo.svg"
                    alt=""
                />
                <img
                    id="game-logo"
                    src={`/images/logo--${params.get("gameId")}.png`}
                    alt=""
                />
                <div id="loading-txt">
                    Game may take up to 60 seconds to load
                </div>
                <div id="gameLoadingBack">
                    <div id="gameLoadingProgress"></div>
                    <p id="progressPercent">0.00%</p>
                </div>
            </div>
        </div>
    );
};

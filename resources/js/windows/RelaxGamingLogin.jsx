import React, { useCallback, useEffect, useState } from "react";
import { EE } from "../App";
import "../css/login.css";
import { PAGE_SIZE_DEFAULT } from "../common/Config";
import { post, relaxGamingVerifyToken } from "../server/server";

export const RelaxGamingLogin = () => {
    const [searchParams, setSearchParams] = useState({});

    useEffect(() => {
        EE.addListener("RESIZE", onResize);
        EE.emit("FORCE_RESIZE");
    }, []);

    useEffect(() => {
        const searchParams = new URLSearchParams(window.location.search);
        const gameId = searchParams.get("gameId");

        setSearchParams({
            gameId,
            token: searchParams.get("token"),
            env: searchParams.get("env"),
        });

        if (gameId) {
            document.getElementById(
                "loading_popup_image"
            ).style.backgroundImage = `url('/images/splash-screen--${searchParams.get(
                "gameId"
            )}.jpg')`;
        }
    }, [window.location.search]);

    useEffect(() => {
        searchParams?.token && verifyToken();
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

    return (
        <div className="popup" id="loading_popup">
            <div
                id="loading_popup_image"
                style={{ backgroundColor: "#cccccc" }}
            >
                <div id="gameLoadingBack">
                    <div id="gameLoadingProgress"></div>
                    <p id="progressPercent">0.00%</p>
                </div>
            </div>
        </div>
    );
};

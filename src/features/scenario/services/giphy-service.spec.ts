import { GiphyService } from "./giphy-service";
import { IHttpResponse } from "@/shared/services/http-client/repository/http-response-repository";
import { IGiphyResponse } from "../types/giphy-type";
import mockHttpClient from "../../../../test/mock/http-client";

describe("Giphy Service", () => {
    const giphyService = GiphyService(mockHttpClient);

    it("should return search results from Giphy API", async () => {
        const query = "funny cats";
        const mockResponse: IHttpResponse<IGiphyResponse> = {
            data: {
                data: [
                    {
                        type: "gif",
                        id: "YPmyynJPNCGYQAQd2P",
                        url: "https://giphy.com/gifs/insuranceking-ed-bassmaster-insurance-king-tongue-clicking-YPmyynJPNCGYQAQd2P",
                        slug: "insuranceking-ed-bassmaster-insurance-king-tongue-clicking-YPmyynJPNCGYQAQd2P",
                        bitly_gif_url: "https://gph.is/g/ZWdbmL7",
                        bitly_url: "https://gph.is/g/ZWdbmL7",
                        embed_url: "https://giphy.com/embed/YPmyynJPNCGYQAQd2P",
                        username: "insuranceking",
                        source: "https://www.youtube.com/watch?v=DlxlaShjA1E",
                        title: "Ed Bassmaster Teste GIF by Insurance_King",
                        rating: "g",
                        content_url: "",
                        source_tld: "www.youtube.com",
                        source_post_url:
                            "https://www.youtube.com/watch?v=DlxlaShjA1E",
                        is_sticker: 0,
                        import_datetime: "2019-11-17 16:49:28",
                        trending_datetime: "0000-00-00 00:00:00",
                        images: {
                            original: {
                                height: "270",
                                width: "480",
                                size: "482051",
                                url: "https://media2.giphy.com/media/YPmyynJPNCGYQAQd2P/giphy.gif?cid=ca91454d7x0jd0wgv8ie78m92zr29vt60cgjauxmyt3f4i6i&ep=v1_gifs_search&rid=giphy.gif&ct=g",
                                mp4_size: "86660",
                                mp4: "https://media2.giphy.com/media/YPmyynJPNCGYQAQd2P/giphy.mp4?cid=ca91454d7x0jd0wgv8ie78m92zr29vt60cgjauxmyt3f4i6i&ep=v1_gifs_search&rid=giphy.mp4&ct=g",
                                webp_size: "128964",
                                webp: "https://media2.giphy.com/media/YPmyynJPNCGYQAQd2P/giphy.webp?cid=ca91454d7x0jd0wgv8ie78m92zr29vt60cgjauxmyt3f4i6i&ep=v1_gifs_search&rid=giphy.webp&ct=g",
                                frames: "8",
                                hash: "fceca44cb421e5d462662e362d812427",
                            },
                            downsized: {
                                height: "270",
                                width: "480",
                                size: "482051",
                                url: "https://media2.giphy.com/media/YPmyynJPNCGYQAQd2P/giphy.gif?cid=ca91454d7x0jd0wgv8ie78m92zr29vt60cgjauxmyt3f4i6i&ep=v1_gifs_search&rid=giphy.gif&ct=g",
                            },
                            downsized_large: {
                                height: "270",
                                width: "480",
                                size: "482051",
                                url: "https://media2.giphy.com/media/YPmyynJPNCGYQAQd2P/giphy.gif?cid=ca91454d7x0jd0wgv8ie78m92zr29vt60cgjauxmyt3f4i6i&ep=v1_gifs_search&rid=giphy.gif&ct=g",
                            },
                            downsized_medium: {
                                height: "270",
                                width: "480",
                                size: "482051",
                                url: "https://media2.giphy.com/media/YPmyynJPNCGYQAQd2P/giphy.gif?cid=ca91454d7x0jd0wgv8ie78m92zr29vt60cgjauxmyt3f4i6i&ep=v1_gifs_search&rid=giphy.gif&ct=g",
                            },
                            downsized_small: {
                                height: "270",
                                width: "480",
                                mp4_size: "86660",
                                mp4: "https://media2.giphy.com/media/YPmyynJPNCGYQAQd2P/giphy-downsized-small.mp4?cid=ca91454d7x0jd0wgv8ie78m92zr29vt60cgjauxmyt3f4i6i&ep=v1_gifs_search&rid=giphy-downsized-small.mp4&ct=g",
                            },
                            downsized_still: {
                                height: "270",
                                width: "480",
                                size: "482051",
                                url: "https://media2.giphy.com/media/YPmyynJPNCGYQAQd2P/giphy_s.gif?cid=ca91454d7x0jd0wgv8ie78m92zr29vt60cgjauxmyt3f4i6i&ep=v1_gifs_search&rid=giphy_s.gif&ct=g",
                            },
                            fixed_height: {
                                height: "200",
                                width: "356",
                                size: "217141",
                                url: "https://media2.giphy.com/media/YPmyynJPNCGYQAQd2P/200.gif?cid=ca91454d7x0jd0wgv8ie78m92zr29vt60cgjauxmyt3f4i6i&ep=v1_gifs_search&rid=200.gif&ct=g",
                                mp4_size: "58441",
                                mp4: "https://media2.giphy.com/media/YPmyynJPNCGYQAQd2P/200.mp4?cid=ca91454d7x0jd0wgv8ie78m92zr29vt60cgjauxmyt3f4i6i&ep=v1_gifs_search&rid=200.mp4&ct=g",
                                webp_size: "95890",
                                webp: "https://media2.giphy.com/media/YPmyynJPNCGYQAQd2P/200.webp?cid=ca91454d7x0jd0wgv8ie78m92zr29vt60cgjauxmyt3f4i6i&ep=v1_gifs_search&rid=200.webp&ct=g",
                            },
                            fixed_height_downsampled: {
                                height: "200",
                                width: "356",
                                size: "180391",
                                url: "https://media2.giphy.com/media/YPmyynJPNCGYQAQd2P/200_d.gif?cid=ca91454d7x0jd0wgv8ie78m92zr29vt60cgjauxmyt3f4i6i&ep=v1_gifs_search&rid=200_d.gif&ct=g",
                                webp_size: "116266",
                                webp: "https://media2.giphy.com/media/YPmyynJPNCGYQAQd2P/200_d.webp?cid=ca91454d7x0jd0wgv8ie78m92zr29vt60cgjauxmyt3f4i6i&ep=v1_gifs_search&rid=200_d.webp&ct=g",
                            },
                            fixed_height_small: {
                                height: "100",
                                width: "178",
                                size: "80121",
                                url: "https://media2.giphy.com/media/YPmyynJPNCGYQAQd2P/100.gif?cid=ca91454d7x0jd0wgv8ie78m92zr29vt60cgjauxmyt3f4i6i&ep=v1_gifs_search&rid=100.gif&ct=g",
                                mp4_size: "23398",
                                mp4: "https://media2.giphy.com/media/YPmyynJPNCGYQAQd2P/100.mp4?cid=ca91454d7x0jd0wgv8ie78m92zr29vt60cgjauxmyt3f4i6i&ep=v1_gifs_search&rid=100.mp4&ct=g",
                                webp_size: "41612",
                                webp: "https://media2.giphy.com/media/YPmyynJPNCGYQAQd2P/100.webp?cid=ca91454d7x0jd0wgv8ie78m92zr29vt60cgjauxmyt3f4i6i&ep=v1_gifs_search&rid=100.webp&ct=g",
                            },
                            fixed_height_small_still: {
                                height: "100",
                                width: "178",
                                size: "10645",
                                url: "https://media2.giphy.com/media/YPmyynJPNCGYQAQd2P/100_s.gif?cid=ca91454d7x0jd0wgv8ie78m92zr29vt60cgjauxmyt3f4i6i&ep=v1_gifs_search&rid=100_s.gif&ct=g",
                            },
                            fixed_height_still: {
                                height: "200",
                                width: "356",
                                size: "26611",
                                url: "https://media2.giphy.com/media/YPmyynJPNCGYQAQd2P/200_s.gif?cid=ca91454d7x0jd0wgv8ie78m92zr29vt60cgjauxmyt3f4i6i&ep=v1_gifs_search&rid=200_s.gif&ct=g",
                            },
                            fixed_width: {
                                height: "113",
                                width: "200",
                                size: "106312",
                                url: "https://media2.giphy.com/media/YPmyynJPNCGYQAQd2P/200w.gif?cid=ca91454d7x0jd0wgv8ie78m92zr29vt60cgjauxmyt3f4i6i&ep=v1_gifs_search&rid=200w.gif&ct=g",
                                mp4_size: "26081",
                                mp4: "https://media2.giphy.com/media/YPmyynJPNCGYQAQd2P/200w.mp4?cid=ca91454d7x0jd0wgv8ie78m92zr29vt60cgjauxmyt3f4i6i&ep=v1_gifs_search&rid=200w.mp4&ct=g",
                                webp_size: "47240",
                                webp: "https://media2.giphy.com/media/YPmyynJPNCGYQAQd2P/200w.webp?cid=ca91454d7x0jd0wgv8ie78m92zr29vt60cgjauxmyt3f4i6i&ep=v1_gifs_search&rid=200w.webp&ct=g",
                            },
                            fixed_width_downsampled: {
                                height: "113",
                                width: "200",
                                size: "76935",
                                url: "https://media2.giphy.com/media/YPmyynJPNCGYQAQd2P/200w_d.gif?cid=ca91454d7x0jd0wgv8ie78m92zr29vt60cgjauxmyt3f4i6i&ep=v1_gifs_search&rid=200w_d.gif&ct=g",
                                webp_size: "46262",
                                webp: "https://media2.giphy.com/media/YPmyynJPNCGYQAQd2P/200w_d.webp?cid=ca91454d7x0jd0wgv8ie78m92zr29vt60cgjauxmyt3f4i6i&ep=v1_gifs_search&rid=200w_d.webp&ct=g",
                            },
                            fixed_width_small: {
                                height: "57",
                                width: "100",
                                size: "29225",
                                url: "https://media2.giphy.com/media/YPmyynJPNCGYQAQd2P/100w.gif?cid=ca91454d7x0jd0wgv8ie78m92zr29vt60cgjauxmyt3f4i6i&ep=v1_gifs_search&rid=100w.gif&ct=g",
                                mp4_size: "10971",
                                mp4: "https://media2.giphy.com/media/YPmyynJPNCGYQAQd2P/100w.mp4?cid=ca91454d7x0jd0wgv8ie78m92zr29vt60cgjauxmyt3f4i6i&ep=v1_gifs_search&rid=100w.mp4&ct=g",
                                webp_size: "18646",
                                webp: "https://media2.giphy.com/media/YPmyynJPNCGYQAQd2P/100w.webp?cid=ca91454d7x0jd0wgv8ie78m92zr29vt60cgjauxmyt3f4i6i&ep=v1_gifs_search&rid=100w.webp&ct=g",
                            },
                            fixed_width_small_still: {
                                height: "57",
                                width: "100",
                                size: "4148",
                                url: "https://media2.giphy.com/media/YPmyynJPNCGYQAQd2P/100w_s.gif?cid=ca91454d7x0jd0wgv8ie78m92zr29vt60cgjauxmyt3f4i6i&ep=v1_gifs_search&rid=100w_s.gif&ct=g",
                            },
                            fixed_width_still: {
                                height: "113",
                                width: "200",
                                size: "13795",
                                url: "https://media2.giphy.com/media/YPmyynJPNCGYQAQd2P/200w_s.gif?cid=ca91454d7x0jd0wgv8ie78m92zr29vt60cgjauxmyt3f4i6i&ep=v1_gifs_search&rid=200w_s.gif&ct=g",
                            },
                            looping: {
                                mp4_size: "2436908",
                                mp4: "https://media2.giphy.com/media/YPmyynJPNCGYQAQd2P/giphy-loop.mp4?cid=ca91454d7x0jd0wgv8ie78m92zr29vt60cgjauxmyt3f4i6i&ep=v1_gifs_search&rid=giphy-loop.mp4&ct=g",
                            },
                            original_still: {
                                height: "270",
                                width: "480",
                                size: "60465",
                                url: "https://media2.giphy.com/media/YPmyynJPNCGYQAQd2P/giphy_s.gif?cid=ca91454d7x0jd0wgv8ie78m92zr29vt60cgjauxmyt3f4i6i&ep=v1_gifs_search&rid=giphy_s.gif&ct=g",
                            },
                            original_mp4: {
                                height: "270",
                                width: "480",
                                mp4_size: "86660",
                                mp4: "https://media2.giphy.com/media/YPmyynJPNCGYQAQd2P/giphy.mp4?cid=ca91454d7x0jd0wgv8ie78m92zr29vt60cgjauxmyt3f4i6i&ep=v1_gifs_search&rid=giphy.mp4&ct=g",
                            },
                            preview: {
                                height: "204",
                                width: "362",
                                mp4_size: "34614",
                                mp4: "https://media2.giphy.com/media/YPmyynJPNCGYQAQd2P/giphy-preview.mp4?cid=ca91454d7x0jd0wgv8ie78m92zr29vt60cgjauxmyt3f4i6i&ep=v1_gifs_search&rid=giphy-preview.mp4&ct=g",
                            },
                            preview_gif: {
                                height: "61",
                                width: "108",
                                size: "47853",
                                url: "https://media2.giphy.com/media/YPmyynJPNCGYQAQd2P/giphy-preview.gif?cid=ca91454d7x0jd0wgv8ie78m92zr29vt60cgjauxmyt3f4i6i&ep=v1_gifs_search&rid=giphy-preview.gif&ct=g",
                            },
                            preview_webp: {
                                height: "124",
                                width: "220",
                                size: "42878",
                                url: "https://media2.giphy.com/media/YPmyynJPNCGYQAQd2P/giphy-preview.webp?cid=ca91454d7x0jd0wgv8ie78m92zr29vt60cgjauxmyt3f4i6i&ep=v1_gifs_search&rid=giphy-preview.webp&ct=g",
                            },
                            "480w_still": {
                                height: "270",
                                width: "480",
                                size: "482051",
                                url: "https://media2.giphy.com/media/YPmyynJPNCGYQAQd2P/480w_s.jpg?cid=ca91454d7x0jd0wgv8ie78m92zr29vt60cgjauxmyt3f4i6i&ep=v1_gifs_search&rid=480w_s.jpg&ct=g",
                            },
                        },
                        user: {
                            avatar_url:
                                "https://media1.giphy.com/avatars/insuranceking/rJAk8m4kNkX9.png",
                            banner_image:
                                "https://media1.giphy.com/headers/insuranceking/4vSdjPi0n7c1.jpg",
                            banner_url:
                                "https://media1.giphy.com/headers/insuranceking/4vSdjPi0n7c1.jpg",
                            profile_url: "https://giphy.com/insuranceking/",
                            username: "insuranceking",
                            display_name: "Insurance_King",
                            description:
                                "We are an Insurance agency that insures cars, motorcycles, and we also do SR-22 policies. We like to have fun with our marketing check some of our stuff out online.",
                            instagram_url:
                                "https://instagram.com/insurancekingcorporate",
                            website_url: "https://www.insuranceking.com",
                            is_verified: false,
                        },
                        analytics_response_payload:
                            "e=ZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD1jYTkxNDU0ZDd4MGpkMHdndjhpZTc4bTkyenIyOXZ0NjBjZ2phdXhteXQzZjRpNmkmZ2lmX2lkPVlQbXl5bkpQTkNHWVFBUWQyUCZjdD1n",
                        analytics: {
                            onload: {
                                url: "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD1jYTkxNDU0ZDd4MGpkMHdndjhpZTc4bTkyenIyOXZ0NjBjZ2phdXhteXQzZjRpNmkmZ2lmX2lkPVlQbXl5bkpQTkNHWVFBUWQyUCZjdD1n&action_type=SEEN",
                            },
                            onclick: {
                                url: "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD1jYTkxNDU0ZDd4MGpkMHdndjhpZTc4bTkyenIyOXZ0NjBjZ2phdXhteXQzZjRpNmkmZ2lmX2lkPVlQbXl5bkpQTkNHWVFBUWQyUCZjdD1n&action_type=CLICK",
                            },
                            onsent: {
                                url: "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD1jYTkxNDU0ZDd4MGpkMHdndjhpZTc4bTkyenIyOXZ0NjBjZ2phdXhteXQzZjRpNmkmZ2lmX2lkPVlQbXl5bkpQTkNHWVFBUWQyUCZjdD1n&action_type=SENT",
                            },
                        },
                        alt_text: "",
                    },
                ],
                meta: {
                    status: 200,
                    msg: "OK",
                    response_id: "7x0jd0wgv8ie78m92zr29vt60cgjauxmyt3f4i6i",
                },
                pagination: {
                    total_count: 500,
                    count: 20,
                    offset: 0,
                },
            },
            error: null,
        };

        mockHttpClient.request.mockResolvedValue(mockResponse);

        const response = await giphyService.search(query);

        expect(mockHttpClient.request).toHaveBeenCalledWith({
            path: `/gifs/search?api_key=${process.env
                .NEXT_PUBLIC_GIPHY_API_KEY!}&limit=10&q=${query}`,
        });
        expect(response).toEqual(mockResponse);
    });

    it("should return an error when the request fails", async () => {
        const query = "";
        const mockResponse: IHttpResponse<IGiphyResponse> = {
            data: null,
            error: {
                name: "Error",
                details: ["Request failed with status code 400"],
                duration: 0,
                message: "Request failed with status code 400",
                status: 404,
            },
        };

        mockHttpClient.request.mockResolvedValue(mockResponse);

        const response = await giphyService.search(query);

        expect(mockHttpClient.request).toHaveBeenCalledWith({
            path: `/gifs/search?api_key=${process.env
                .NEXT_PUBLIC_GIPHY_API_KEY!}&limit=10&q=${query}`,
        });
        expect(response).toEqual(mockResponse);
    });
});

import Layout from '../components/Layout'
import TitleBanner from '../components/TitleBanner'
import Card from '../components/Card'
import React, { useState, useEffect } from "react";
import { MovieApi } from '../api/api';
import PageCount from '../components/PageCount';
import DrawerComponent from '../components/Drawer';
import { useRouter } from 'next/router';

export default function TopRated() {
    const router = useRouter()

    type Data = {
        id: number;
        vote_average: number;
        poster_path: string;
        title: string;
        overview: string;
        release_date: string;
        original_language: string
    };

    const [isOpen, setIsOpen] = useState(false);
    const toggleDrawer = () => {
        setIsOpen(!isOpen);
    };

    const [pageNo, setPageNo] = useState<number>(1);
    const changePageNo = (number: any) => {
        setPageNo(number)
    }

    const [topRatedMovies, setTopRatedMovies] = useState<Data[]>([]);
    const getTopRatedMovies = async () => {
        const res: any = await MovieApi.get(`top_rated?api_key=0bae2b774ae975ea338f73141added57&language=en-US&page=${pageNo}`);
        setTopRatedMovies(res?.data.results)
    };

    useEffect(() => {
        getTopRatedMovies()
    }, [pageNo])

    const [movieId, setMovieId] = useState<number>();
    const showDetails = (movieId: any) => {
        toggleDrawer()
        setMovieId(movieId)
    }

    return (
        <>
            <Layout >
                <div className='py-4 px-4' >
                    <TitleBanner title="Top Rated Movies" url="/trending" />
                    <div className='flex w-full flex-wrap' >
                        {topRatedMovies?.map((movies) => {
                            return <Card key={movies.id} data={movies}
                                onClick={() => {
                                    showDetails(movies.id)
                                }}
                            />
                        })}
                    </div>
                    <PageCount onClick={(number: any) => changePageNo(number)} pageNo={pageNo} />
                </div>
                <DrawerComponent isOpen={isOpen} onClose={toggleDrawer} movieId={movieId} />
            </Layout>
        </>
    )
}
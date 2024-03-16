import { FC } from 'react';

export const TermsOfServicePage: FC = () => {
    return (
        <div className="min-h-screen py-6 flex flex-col justify-center sm:py-12">
            <div className="relative py-3 sm:max-w-xl sm:mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-light-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
                <div className="relative px-4 py-10 bg-color--primary-bg border-color--border border shadow-lg sm:rounded-3xl sm:p-20">
                    <div className="max-w-md mx-auto">
                        <h1 className="text-2xl text-white font-semibold text-center">Terms of Service</h1>
                        <div className="space-y-6 py-8">
                            <p className="text-white">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce suscipit aliquam dictum.
                                Curabitur euismod viverra velit, ac posuere metus dapibus ut. Vivamus id enim eget
                                est fermentum malesuada. Maecenas auctor fermentum justo, eget hendrerit odio ultricies
                                non. Pellentesque varius, massa vel finibus accumsan, lectus velit cursus elit, at
                                vestibulum mauris erat a eros. Vivamus sit amet aliquet risus. Ut consequat libero
                                nec tellus feugiat, id rhoncus quam consequat. Nullam feugiat risus nisi, ac vestibulum
                                metus congue ut. Vestibulum in commodo nisi. Proin et felis eros. Quisque vehicula
                                ultricies volutpat. Mauris mattis ex at ex fermentum, at scelerisque ante sollicitudin.
                                Suspendisse potenti. Praesent pharetra turpis sed ultrices consequat. Vivamus malesuada
                                odio quis magna malesuada, eget ullamcorper libero venenatis.
                            </p>
                            <p className="text-white">
                                Integer feugiat, nulla sit amet rutrum tincidunt, quam magna consectetur felis, vitae
                                scelerisque ante metus nec lacus. Sed non laoreet velit. Fusce eget orci enim.
                                Proin vehicula nibh nisi, sit amet dapibus enim vehicula sit amet. Duis auctor eros
                                nec neque malesuada consequat. Sed tristique purus a lectus condimentum, nec tincidunt
                                ex vehicula. Nullam ac libero varius, congue est at, egestas ligula. Vestibulum
                                pellentesque purus at mi dapibus, in hendrerit sapien fringilla.
                            </p>
                            <p className="text-white">
                                Nulla facilisi. Aliquam non purus non arcu vestibulum consequat. Curabitur vitae
                                libero sed felis vehicula venenatis sit amet sit amet neque. Suspendisse nec est id
                                mauris egestas faucibus. Nulla facilisi. Nam et risus et ipsum feugiat hendrerit
                                vel sit amet elit. Ut semper lacus ac nisi ultricies, non vehicula mi auctor.
                                Nam eget sapien sapien. Curabitur eget consectetur purus, quis faucibus nulla.
                                Aenean sit amet congue justo.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

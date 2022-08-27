import Head from "next/head";

const Meta = ({ title, description }) => {
    return (
        <Head>
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
    );
};

Meta.defaultProps = {
    title: "CréaWeb, création de site web tout simplement",
    description: "L'agence web familiale qui vous accompagne en toute simplicité.",
};

export default Meta;

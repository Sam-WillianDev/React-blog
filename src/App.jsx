import Header from './components/Header';
import FormBase from './components/FormBase';
import PostHeader from './components/PostHeader';
import PostContent from './components/PostContent';
import Tags from './components/Tags';
import Latest from './components/Latest';

function App() {
    return (
        <>
            <Header className="bg-witch-500 flex p-3  border-black shadow-md">
                <h1 className="ml-5 text-xl font-bold">FS34Blog</h1>
                <div>
                    <FormBase className="ml-5 ">
                        <input className="rounded border px-2 py-1" type="text" />
                        <button className="rounded-md border-black border-2"> Pesquisar</button>
                    </FormBase>
                </div>
            </Header>


            <div className="flex px-40 py-10 gap-20">
                <div className="w-full">
                    <div>
                        <PostHeader></PostHeader>
                        <PostContent></PostContent>
                    </div>
                </div>
                <div className="w-2/5">
                    <div className="w-full">
                        <Tags></Tags>
                        <Latest></Latest>
                    </div>
                </div>
            </div>

        </>

    );
}

export default App;

import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { supabase } from "../../services/supabaseClient";
import Star from "../Classifcation/Stars";
import ColorButtons from "../Buttons/ColorButtons/ColorButtons";
import SizeButtonShoes from "../Buttons/SizeButton/SizeButton";
import Tenis1 from "../../../public/tenis12.png";
import "./Product.css";

const ColorsBg = [
    { cor: "#E2E3FF" },
    { cor: "#FFE8BC" },
    { cor: "#FFC0BC" },
    { cor: "#DEC699" },
    { cor: "#E8DFCF" },
];

export function Product() {
    const [indiceCor, setIndiceCor] = useState(0);

    const nextCor = () =>
        setIndiceCor((prev) => (prev + 1) % ColorsBg.length);

    const previousCor = () =>
        setIndiceCor((prev) => (prev - 1 + ColorsBg.length) % ColorsBg.length);

    async function adicionarAoCarrinho() {
        const { data: sessionData } = await supabase.auth.getSession();
        const user = sessionData?.session?.user;

        if (!user) {
            alert("Você precisa estar logado para adicionar ao carrinho.");
            return;
        }

        const { data: produto, error } = await supabase
            .from("produtos")
            .select("*")
            .ilike("nome", "%Tênis Nike Air Force 1%")
            .limit(1)
            .single();

        if (error || !produto) {
            alert("Produto não encontrado no banco de dados.");
            return;
        }

        const { error: insertError } = await supabase.from("carrinho").insert([
            {
                usuario_id: user.id,
                produto_id: produto.id,
                quantidade: 1,
            },
        ]);

        if (insertError) {
            console.error(insertError);
            alert("Erro ao adicionar produto ao carrinho.");
        } else {
            alert("Produto adicionado ao carrinho com sucesso!");
        }
    }

    return (
        <div className="backgroundColor">
            <div className="containerProduct">
                <div className="breadcrumbs">
                    <h5>Home / Produtos / Tênis / Nike / Tênis Nike Revolution</h5>
                </div>

                <div className="descProduto">
                    <div className="imgProduct">
                        <div
                            className="principalImg"
                            style={{ backgroundColor: ColorsBg[indiceCor].cor }}
                        >
                            <img src={Tenis1} alt="Tênis Nike Air Force 1" />

                            <div className="slide-btn">
                                <FontAwesomeIcon
                                    icon={faChevronLeft}
                                    className="navigation-btn"
                                    onClick={previousCor}
                                    role="button"
                                    aria-label="previous color"
                                    tabIndex={0}
                                    onKeyDown={(e) => {
                                        if (e.key === "Enter") previousCor();
                                    }}
                                />
                                <FontAwesomeIcon
                                    icon={faChevronRight}
                                    className="navigation-btn"
                                    onClick={nextCor}
                                    role="button"
                                    aria-label="next color"
                                    tabIndex={0}
                                    onKeyDown={(e) => {
                                        if (e.key === "Enter") nextCor();
                                    }}
                                />
                            </div>
                        </div>

                        <div className="thumbs">
                            {ColorsBg.map((_, index) => (
                                <img
                                    key={index}
                                    onClick={() => setIndiceCor(index)}
                                    src={Tenis1}
                                    alt={`Miniatura cor ${index + 1}`}
                                    className={`item${index + 1} ${indiceCor === index ? "active" : ""
                                        }`}
                                    role="button"
                                    tabIndex={0}
                                    onKeyDown={(e) => {
                                        if (e.key === "Enter") setIndiceCor(index);
                                    }}
                                />
                            ))}
                        </div>
                    </div>

                    <div className="productData">
                        <h1>Tênis Nike Air Force 1</h1>
                        <p className="productReference">Casual | Nike | REF:38416711</p>

                        <div className="avaliationRow">
                            <Star />
                            <p className="avaliation">
                                4.7 <FaStar />
                            </p>
                            <p className="avaliationNumber">(90 avaliações)</p>
                        </div>

                        <div className="price">
                            <h2 className="productPrice">
                                <span>R$</span> 559<span>,99</span>
                            </h2>
                            <h2 className="realPrice">R$ 799,99</h2>
                        </div>

                        <h4 className="productDescription">Descrição do Produto</h4>
                        <p className="productText">
                            Sem problemas, todos jogam. Feito com pelo menos 20% de materiais
                            reciclado por peso, o original que escreveu a história dos tênis é
                            atualizado com couro sintético.
                        </p>

                        <h4 className="productSize">Tamanho</h4>
                        <div className="sizeNumbers">
                            <SizeButtonShoes />
                        </div>

                        <h4 className="productColors">Cores</h4>
                        <div className="colors-btn">
                            <ColorButtons />
                        </div>

                        <button className="buy-btn" onClick={adicionarAoCarrinho}>
                            Comprar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Product;

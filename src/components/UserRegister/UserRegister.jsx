import "./UserRegister.css";
import { useNavigate } from "react-router-dom";
import { supabase } from "../../services/supabaseClient.js";
import { useRef } from "react";

export function UserRegister() {
    const navigate = useNavigate();

    const formRef = useRef();

    async function handleCreateUser(e) {
        e.preventDefault();
        const form = formRef.current;

        const data = {
            nome: form.name.value,
            cpf: form.number.value,
            email: form.email.value,
            celular: form.celular.value,
            endereco: form.endereco.value,
            bairro: form.bairro.value,
            cidade: form.cidade.value,
            cep: form.cep.value,
            complemento: form.complemento.value,
        };

        const senha = prompt("Crie uma senha para sua conta:");
        if (!senha) return;

        const { data: signUpData, error: signUpError } = await supabase.auth.signUp({
            email: data.email,
            password: senha,
        });

        if (signUpError) {
            alert("Erro ao criar conta: " + signUpError.message);
            return;
        }

        const userId = signUpData?.user?.id;
        if (!userId) {
            alert("Erro: ID do usuário não encontrado.");
            return;
        }

        const { error: insertError } = await supabase.from("usuarios").insert([
            {
                id: userId,
                ...data,
            },
        ]);

        if (insertError) {
            alert("Erro ao salvar dados do usuário: " + insertError.message);
            return;
        }

        navigate("/pedidos/meus-pedidos");
    }

    return (
        <div className="container">
            <div className="criar-conta">
                <h3>Criar Conta</h3>
            </div>

            <div className="form-box">
                <form ref={formRef} onSubmit={handleCreateUser} className="form-container1">
                    <div className="title-pessoal"><p>Informações Pessoais</p></div>
                    <span className="linha"></span>

                    <div className="form-input-label1">
                        {[
                            { id: "name", label: "Nome Completo*", type: "text", autoComplete: "name" },
                            { id: "number", label: "CPF*", type: "text", maxLength: "14", pattern: "[0-9]{3}\\.?[0-9]{3}\\.?[0-9]{3}-?[0-9]{2}" },
                            { id: "email", label: "E-mail*", type: "email", autoComplete: "email" },
                            { id: "celular", label: "Celular*", type: "tel", maxLength: "15", pattern: "[0-9\\(\\)\\-\\s\\+]+", autoComplete: "tel" },
                        ].map(({ id, label, ...props }) => (
                            <div key={id} className="input-group">
                                <label htmlFor={id}>{label}</label>
                                <input id={id} required placeholder={`Insira seu ${label.split("*")[0].toLowerCase()}`} {...props} />
                            </div>
                        ))}
                    </div>

                    <div className="title-entrega"><p>Informações de Entrega</p></div>
                    <span className="linha"></span>

                    <div className="form-input-label2">
                        {[
                            { id: "endereco", label: "Endereço*", type: "text", autoComplete: "street-address" },
                            { id: "bairro", label: "Bairro*", type: "text", autoComplete: "address-level2" },
                            { id: "cidade", label: "Cidade*", type: "text", autoComplete: "address-level2" },
                            { id: "cep", label: "CEP*", type: "text", maxLength: "9", pattern: "[0-9]{5}-?[0-9]{3}", autoComplete: "postal-code" },
                            { id: "complemento", label: "Complemento", type: "text", autoComplete: "address-line2" },
                        ].map(({ id, label, ...props }) => (
                            <div key={id} className="input-group">
                                <label htmlFor={id}>{label}</label>
                                <input id={id} placeholder={`Insira seu ${label.split("*")[0].toLowerCase()}`} {...props} />
                            </div>
                        ))}
                    </div>

                    <div className="container-checkbox">
                        <input className="custon-checkbox" type="checkbox" id="newsletter" name="newsletter" />
                        <label htmlFor="newsletter" className="paragraph">
                            Quero receber por email ofertas e novidades das lojas da Digital Store. A frequência de envios pode variar de acordo com a interação do cliente.
                        </label>
                    </div>

                    <button type="submit">Criar Conta</button>
                </form>
            </div>
        </div>
    );
}

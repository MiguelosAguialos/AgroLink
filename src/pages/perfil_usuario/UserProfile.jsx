import React, { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Card,
  Modal,
  Form,
} from "react-bootstrap";
import "./UserProfile.css";
import avatar from "../../assets/user.png";
import HeaderAgroLink from "../../HeaderAgroLink";
import { getUserInfo, updateUser } from "../../services/user.service";

function UserProfile() {
  const [user, setUser] = useState(null);
  const [editedUser, setEditedUser] = useState(user);
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  useEffect(() => {
    getConsumidorInfo().then((res) => {
      setUser(res);
      setEditedUser(res);
    });
  }, []);

  // Estados para modais
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [showAddressModal, setShowAddressModal] = useState(false);
  const [showNameModal, setShowNameModal] = useState(false);

  // Erros de senha
  const [wrongPassword, setWrongPassword] = useState(false);
  const [passwordMismatch, setPasswordMismatch] = useState(false);

  // Configurações
  const [twoFactor, setTwoFactor] = useState(false);
  const [notifications, setNotifications] = useState(true);

  // Funções toggle
  const toggleTwoFactor = () => setTwoFactor(!twoFactor);
  const toggleNotifications = () => setNotifications(!notifications);

  // Salvar nova senha
  const handlePasswordSave = () => {
    setWrongPassword(false);
    setPasswordMismatch(false);

    if (user.password !== currentPassword) {
      setWrongPassword(true);
      return;
    }

    if (newPassword !== confirmPassword) {
      setPasswordMismatch(true);
      return;
    }
    user.password = newPassword;
    updateUser(user);
    setShowPasswordModal(false);
  };

  // Salvar endereço
  const handleAddressSave = () => {
    setUser(editedUser);
    updateUser(editedUser);
    setShowAddressModal(false);
  };

  // Salvar nome
  const handleNameSave = () => {
    setUser(editedUser);
    updateUser(editedUser);
    setShowNameModal(false);
  };

  const handleCancelEdit = () => {
    setShowAddressModal(false);
    setShowNameModal(false);
    setShowPasswordModal(false);
    setEditedUser(user);
  };

  if (user == null) {
    return <p>Carregando...</p>; // Exibe uma tela de carregamento temporária
  }

  return (
    <>
      {/* Header global */}
      <HeaderAgroLink />

      <Container className="user-profile py-5">
        {/* Header do perfil */}
        <Row className="user-header mb-4">
          <Col md={3} className="text-center">
            <img src={avatar} alt="Avatar" className="user-avatar" />
          </Col>
          <Col md={9} className="d-flex flex-column justify-content-center">
            <div className="user-info">
              <h2 className="user-name">{user.nome}</h2>
              <button
                className="edit-link mt-1 d-block"
                onClick={() => setShowNameModal(true)}
              >
                Editar nome
              </button>
            </div>
          </Col>
        </Row>

        {/* Configurações + Estatísticas */}
        <Row className="mb-5">
          <Col md={4}>
            <div className="settings-section">
              <div className="user-settings">
                <h5>Senha atual:</h5>
                <p>{"*".repeat(user.password.length)}</p>
                <button
                  className="edit-link"
                  onClick={() => setShowPasswordModal(true)}
                >
                  Alterar senha
                </button>
              </div>

              <div className="user-settings">
                <h5>Endereço atual:</h5>
                <p>Logradouro: {user.endereco}</p>
                <p>Complemento: {user.complemento}</p>
                <p>CEP: {user.CEP}</p>
                <button
                  className="edit-link"
                  onClick={() => {
                    setShowAddressModal(true);
                  }}
                >
                  Alterar endereço
                </button>
              </div>

              <div className="user-settings">
                <div className="switch-container">
                  <span className="switch-label">
                    Verificação em duas etapas
                  </span>
                  <div
                    className={`switch ${twoFactor ? "on" : ""}`}
                    onClick={toggleTwoFactor}
                  />
                </div>
                <div className="switch-container mt-3">
                  <span className="switch-label">Notificações</span>
                  <div
                    className={`switch ${notifications ? "on" : ""}`}
                    onClick={toggleNotifications}
                  />
                </div>
              </div>
            </div>
          </Col>

          <Col md={8}>
            <Row className="stats-row text-center">
              {["Quantidade Doações"].map((label, index) => (
                <Col key={label} md={4}>
                  <Card className="stats-card">
                    <Card.Body>
                      <h4>{[0, 34, 5][index]}</h4>
                      <p>{label}</p>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>

        {/* Histórico de doações */}
        {/* <Row className="g-4">
          {[1, 2, 3].map((item) => (
            <Col md={4} key={item}>
              <Card className="history-card p-3">
                <Card.Body>
                  <Card.Title>Doação #{item}</Card.Title>
                  <Card.Text>
                    Doação de frutas e verduras no posto X. Obrigado por
                    colaborar!
                  </Card.Text>
                  <Button variant="success" size="sm">
                    Ver detalhes
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row> */}

        {/* Modal: Alterar Senha */}
        <Modal
          show={showPasswordModal}
          onHide={() => setShowPasswordModal(false)}
        >
          <Modal.Header closeButton>
            <Modal.Title>Alterar Senha</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Senha atual</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Digite a senha atual"
                  value={currentPassword}
                  onChange={(e) => setCurrentPassword(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Nova senha</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Digite a nova senha"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Confirmar nova senha</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Confirme a nova senha"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </Form.Group>
              {wrongPassword && <p className="text-danger">SENHA INCORRETA</p>}
              {passwordMismatch && (
                <p className="text-danger">As senhas não coincidem</p>
              )}
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCancelEdit}>
              Cancelar
            </Button>
            <Button variant="success" onClick={handlePasswordSave}>
              Salvar
            </Button>
          </Modal.Footer>
        </Modal>

        {/* Modal: Alterar Endereço */}
        <Modal
          show={showAddressModal}
          onHide={() => setShowAddressModal(false)}
        >
          <Modal.Header closeButton>
            <Modal.Title>Alterar Endereço</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Endereço</Form.Label>
                <Form.Control
                  type="text"
                  placeholder={user.endereco}
                  value={editedUser.endereco}
                  onChange={(e) =>
                    setEditedUser({ ...editedUser, endereco: e.target.value })
                  }
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Complemento</Form.Label>
                <Form.Control
                  type="text"
                  placeholder={user.complemento}
                  value={editedUser.complemento}
                  onChange={(e) =>
                    setEditedUser({
                      ...editedUser,
                      complemento: e.target.value,
                    })
                  }
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Cidade - CEP</Form.Label>
                <Form.Control
                  type="text"
                  placeholder={user.CEP}
                  value={editedUser.CEP}
                  onChange={(e) =>
                    setEditedUser({ ...editedUser, CEP: e.target.value })
                  }
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCancelEdit}>
              Cancelar
            </Button>
            <Button variant="success" onClick={handleAddressSave}>
              Salvar
            </Button>
          </Modal.Footer>
        </Modal>

        {/* Modal: Editar Nome */}
        <Modal show={showNameModal} onHide={() => setShowNameModal(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Editar Nome</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group className="mb-3">
              <Form.Label>Nome</Form.Label>
              <Form.Control
                type="text"
                placeholder="Digite seu nome"
                value={editedUser.nome}
                onChange={(e) =>
                  setEditedUser({ ...editedUser, nome: e.target.value })
                }
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCancelEdit}>
              Cancelar
            </Button>
            <Button variant="success" onClick={handleNameSave}>
              Salvar
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
    </>
  );
}

async function getConsumidorInfo() {
  const res = await getUserInfo(localStorage.getItem("userMail"));
  return res;
}

export default UserProfile;

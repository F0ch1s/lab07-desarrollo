const Login = () => {
  return (
    <>
      <div class="login-box">
        <h1>Login</h1>
        <form>
          <div>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div>
            <label htmlFor="password">Contraseña:</label>
            <input type="password" id="password" name="password" required />
          </div>
          <button type="submit">Iniciar sesión</button>
        </form>
      </div>
    </>
  );
};

export default Login;

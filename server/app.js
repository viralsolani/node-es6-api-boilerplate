import createError from 'http-errors';
import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import bodyParser from 'body-parser';
import indexRouter from './routes/index';

class App {
  constructor() {
    // Set up the express app
    this.app = express();

    this.setupViewEngine();
    this.setupMiddlewares();
    this.applyRoutes();
    this.setupParsers();
    this.handleNotFoundError();
    this.handleErrors();
  }

  /**
   * Setup View engines and static files configurations.
   *
   */
  setupViewEngine() {
    // view engine setup
    this.app.set('views', path.join(__dirname, 'views'));
    this.app.set('view engine', 'pug');

    // serves up static files from the public folder. Anything in public/
    // will just be served up as the file it is
    this.app.use(express.static(path.join(__dirname, 'public')));
  }

  /**
   * Setting Application level middlewares
   *
   */
  setupMiddlewares() {
    // Log requests to the console.
    this.app.use(logger('dev'));
    this.app.use(express.json());
    this.app.use(express.urlencoded({
      extended: false,
    }));
  }

  /**
   * Setup body and cookie parsers.
   *
   */
  setupParsers() {
    // populates req.cookies with any cookies that came along with the request
    this.app.use(cookieParser());

    // Parse incoming requests data (https://github.com/expressjs/body-parser)
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({
      extended: false,
    }));
  }

  /**
   * Handle 404 errors.
   *
   */
  handleNotFoundError() {
    // catch 404 and forward to error handler
    this.app.use((req, res, next) => {
      next(createError(404));
    });
  }

  /**
   * Applying Global level routes.
   *
   */
  applyRoutes() {
    this.app.use('/', indexRouter);
  }

  /**
   * Handling global errors.
   *
   */
  handleErrors() {
    // error handler
    this.app.use((err, req, res, next) => {
      // set locals, only providing error in development
      res.locals.message = err.message;
      res.locals.error = req.app.get('env') === 'development' ? err : {};

      // render the error page
      res.status(err.status || 500);
      res.render('error');
    });
  }
}

module.exports = (new App()).app;

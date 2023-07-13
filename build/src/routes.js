"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const cont_product_1 = __importDefault(require("./controllers/cont_product"));
const productRoutes = (0, express_1.Router)();
const productCtrl = new cont_product_1.default;
productRoutes.post('/register', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const body = req.body;
    try {
        const response = yield productCtrl.createProduct(body);
        return res.status(response.code).json(response);
    }
    catch (err) {
        return res.status(err.code ? err.code : 500).json(err);
    }
}));
productRoutes.get('/consultCategory', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const value = req.query.category;
    try {
        const response = yield productCtrl.readProductByCategory(value);
        return res.status(response.code).json(response);
    }
    catch (err) {
        return res.status(err.code ? err.code : 500).json(err);
    }
}));
productRoutes.get('/consultName', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const value = req.query.category;
    try {
        const response = yield productCtrl.readProductByName(value);
        return res.status(response.code).json(response);
    }
    catch (err) {
        return res.status(err.code ? err.code : 500).json(err);
    }
}));
exports.default = productRoutes;

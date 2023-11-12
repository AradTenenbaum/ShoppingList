import { Container } from "@mui/material";
import "../css/ShoppingList.css";
import AddProductForm from "../components/AddProductForm";
import SeparationLine from "../components/SeparationLine";
import Products from "../components/Products";
import { Categories, CategoryObject } from "../interfaces/category.interface";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
import { addItem, deleteItem, setTotalItems } from "../reducers/totalItems";
import { getCategories } from "../api/category";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { addProduct, deleteProduct, getProducts } from "../api/product";
import {
  addProductToCategoriesMap,
  fromDBArrayToCategoriesObject,
  getProductsAmountFromCategoriesMap,
  removeProductFromCategoriesMap,
} from "../utils/functions";
import SettingsModal from "../components/SettingsModal";
import { getSettings } from "../utils/localStorage";

function ShoppingList() {
  const [categories, setCategories] = useState<string[]>([]);
  const [productsToCategory, setProductsToCategory] = useState<Categories>({});
  const [openSettingsModal, setOpenSettingsModal] = useState(false);
  const [settings, setSettings] = useState(getSettings());
  const totalItems = useAppSelector((state) => state.totalItems);
  const dispatch = useAppDispatch();

  useEffect(() => {
    (async () => {
      // Fetch categories from server and update the state
      const getCategoryResults = await getCategories();
      if (getCategoryResults.error) {
        errorToast(getCategoryResults.error);
      } else {
        setCategories(
          getCategoryResults.categories.map(
            (categoryObject: CategoryObject) => categoryObject.name
          )
        );
      }

      // Fetch products from server and update the state
      const getProductsResults = await getProducts();
      if (getProductsResults.error) {
        errorToast(getProductsResults.error);
      } else {
        const productsToCategoryObject = fromDBArrayToCategoriesObject(
          getProductsResults.products
        );
        dispatch(
          setTotalItems(
            getProductsAmountFromCategoriesMap(productsToCategoryObject)
          )
        );
        setProductsToCategory(productsToCategoryObject);
      }
    })();
  }, []);

  const onAddProduct = async (name: string, category: string) => {
    // Remove spaces from start and end of the name
    const trimmedName = name.trim();
    if (trimmedName.length === 0) {
      errorToast("Name cannot be empty");
    } else {
      // Send add request
      const result = await addProduct(trimmedName, category);
      if (result.error) {
        errorToast(result.error);
      } else {
        // Add product to state
        setProductsToCategory((productsToCategoryTemp) => {
          const newProductsToCategory = productsToCategoryTemp;
          addProductToCategoriesMap(newProductsToCategory, {
            name: trimmedName,
            category,
          });
          return { ...newProductsToCategory };
        });
        dispatch(addItem());
        successToast("Product was added successfully");
      }
    }
  };

  const onRemoveProduct = async (name: string, category: string) => {
    // Send remove request
    const removeProductResults = await deleteProduct(name, category);
    if (removeProductResults.error) {
      errorToast(removeProductResults.error);
    } else {
      // Removing from the state
      setProductsToCategory((productsToCategoryTemp) => {
        const newProductsToCategory = productsToCategoryTemp;
        removeProductFromCategoriesMap(newProductsToCategory, {
          name,
          category,
        });
        return { ...newProductsToCategory };
      });
      dispatch(deleteItem());
    }
  };

  const errorToast = (message: string) => {
    toast.error(message, {
      position: toast.POSITION.BOTTOM_CENTER,
      autoClose: 5000,
    });
  };

  const successToast = (message: string) => {
    toast.success(message, {
      position: toast.POSITION.BOTTOM_CENTER,
      autoClose: 3000,
    });
  };

  return (
    <div>
      <div className="title-bar">
        <button
          onClick={() => setOpenSettingsModal(true)}
          className="settings-button"
        >
          ⚙
        </button>
        <h1 className="title">Shopping List</h1>
        <div className="spacer"></div>
      </div>
      <Container maxWidth="md">
        <h3 className="total-items">
          Total items: <span className="items-amount">{totalItems}</span>
        </h3>
        <AddProductForm onAddProduct={onAddProduct} categories={categories} />
        <SeparationLine />
        <Products
          productsToCategory={productsToCategory}
          onRemoveProduct={onRemoveProduct}
          settings={settings}
        />
        <ToastContainer />
      </Container>
      <SettingsModal
        open={openSettingsModal}
        setSettings={setSettings}
        settings={settings}
        handleClose={() => setOpenSettingsModal(false)}
      />
    </div>
  );
}

export default ShoppingList;

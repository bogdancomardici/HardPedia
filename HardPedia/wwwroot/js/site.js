﻿// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.


function confirmDelete(categoryName, deleteUrl) {
    if (confirm("Are you sure you want to delete the category '" + categoryName + "'?")) {
        window.location.href = deleteUrl;
    }
}
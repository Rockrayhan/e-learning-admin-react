<?php

namespace App\Http\Controllers\frontend;

use App\Http\Controllers\Controller;
use App\Models\Category;
use App\Models\Manufacturer;
use App\Models\Product;
use App\Models\Review;
use Illuminate\Http\Request;
use Inertia\Inertia;

class HomeController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {   $manufacturers = Manufacturer::all();
        $products = Product::all();
        $reviews = Review::where('status', 1)->get();
        $imageBaseUrl = asset(''); // This will provide the base URL of your Laravel application
        return Inertia::render('Home', 
        [
            'manufacturers' => $manufacturers,
            'products' => $products,
            'reviews' => $reviews,
            'imageBaseUrl' => $imageBaseUrl,

        ]);
    }
    

    public function about()
    {
        return Inertia::render('About');
    
    }



    public function allcourses()
    {  
        $products = Product::all();
        return view('frontend.AllCourses', compact('products'));
    }
    

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
